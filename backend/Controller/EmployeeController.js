/* eslint-disable no-underscore-dangle */
/* eslint-disable import/order */
/* eslint-disable consistent-return */
const Employee = require('../Model/EmployeeSchema');
const validateLoginInput = require('../Validation/Login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const validateEmployee = require('../Validation/Employee');

dotenv.config();

module.exports = {
  login: (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Employee.findOne({ email: req.body.email }).then((employee) => {
      if (!employee) {
        errors.email = 'user not found';
        return res.status(400).json(errors);
      }
      bcrypt.compare(req.body.password, employee.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: employee._id,
            email: employee.email,
          };
          jwt.sign(
            payload,
            process.env.SECRET,
            {
              expiresIn: 360000,
            },
            (err, token) => {
              if (err) console.error('There is some error in token', err);
              else {
                res.json({
                  success: true,
                  email: employee.email,
                  id: employee._id,
                  token: `Bearer ${token}`,
                });
              }
            }
          );
        } else {
          errors.password = 'Incorrect Password';
          return res.status(400).json(errors);
        }
      });
    });
  },
  getEmployee: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Employee.findOne({ _id: decoded.id })
      .then((employee) => {
        res.json({
          success: true,
          employee,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
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
};
