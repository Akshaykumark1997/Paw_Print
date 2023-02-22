/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const validateLoginInput = require('../Validation/Login');
const validateEmployee = require('../Validation/Employee');
const validateService = require('../Validation/Service');
// const verify = require('../Middleware/AdminVerification');
const Employee = require('../Model/EmployeeSchema');
const Service = require('../Model/ServiceSchema');
const Appointment = require('../Model/AppointmentSchema');

dotenv.config();

module.exports = {
  login: (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    if (
      process.env.AdminEmail === req.body.email &&
      process.env.AdminPassword === req.body.password
    ) {
      const payload = {
        email: req.body.email,
      };
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) console.error('There is some error in token', err);
          else {
            res.json({
              success: true,
              email: req.body.email,
              token: `Bearer ${token}`,
            });
          }
        }
      );
    } else {
      errors.password = 'Incorrect Email or  Password';
      return res.status(400).json(errors);
    }
  },
  addEmployee: (req, res) => {
    const { errors, isValid } = validateEmployee(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    bcrypt.hash(req.body.password, 10, (error, hash) => {
      Employee.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        genter: req.body.genter,
        email: req.body.email,
        password: hash,
        image: {
          name: req.file.filename,
          path: req.file.path,
        },
      })
        .then(() => {
          res.json({
            success: true,
            message: 'Employee added successfully',
          });
        })
        .catch(() => {
          res.status(400).json({
            error,
          });
        });
    });
  },
  employees: (req, res) => {
    Employee.find({}).then((employees) => {
      res.json({
        success: true,
        employees,
      });
    });
  },
  assignEmployee: (req, res) => {
    console.log(req.params.id);
    console.log(req.params.eid);
    Appointment.updateOne(
      { _id: req.params.id },
      {
        $set: {
          employee: req.params.eid,
        },
      }
    )
      .then(() => {
        res.json({
          sucess: true,
          message: 'employee Assigned successfully',
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  addService: (req, res) => {
    const { errors, isValid } = validateService(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Service.create({
      name: req.body.name,
      standardPrice: req.body.standard,
      premiumPrice: req.body.premium,
      description: req.body.description,
      image: {
        name: req.file.filename,
        path: req.file.path,
      },
    }).then(() => {
      res.json({
        success: true,
        message: 'service added successfully',
      });
    });
  },
  services: (req, res) => {
    Service.find({}).then((services) => {
      res.json({
        success: true,
        services,
      });
    });
  },
  editService: (req, res) => {
    Service.findOne({ _id: req.params.id }).then((service) => {
      res.json({
        service,
      });
    });
  },
  editServicePost: (req, res) => {
    if (!req.file) {
      Service.find({
        _id: req.body.id,
      }).then((service) => {
        Service.updateOne(
          { _id: req.body.id },
          {
            $set: {
              name: req.body.name,
              standardPrice: req.body.standardPrice,
              premiumPrice: req.body.premiumPrice,
              description: req.body.description,
              'image.name': service.name,
              'image.path': service.path,
            },
          }
        )
          .then(() => {
            res.json({
              sucess: true,
              message: 'updated successfully',
            });
          })
          .catch((error) => {
            res.status(400).json({
              success: false,
              error,
            });
          });
      });
    } else {
      Service.updateOne(
        { _id: req.body.id },
        {
          $set: {
            name: req.body.name,
            standardPrice: req.body.standardPrice,
            premiumPrice: req.body.premiumPrice,
            description: req.body.description,
            'image.name': req.file.filename,
            'image.path': req.file.path,
          },
        }
      )
        .then(() => {
          res.json({
            sucess: true,
            message: 'updated successfully',
          });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            error,
          });
        });
    }
  },
  deleteService: (req, res) => {
    Service.deleteOne({
      _id: req.params.id,
    })
      .then(() => {
        res.json({
          success: true,
          message: 'deleted successfully',
        });
      })
      .catch(() => {
        res.json({
          sucess: false,
          message: 'error occures',
        });
      });
  },
  getAppointments: (req, res) => {
    Appointment.find({}).then((appointments) => {
      Employee.find({}).then((employees) => {
        res.json({
          success: true,
          appointments,
          employees,
        });
      });
    });
  },
};
