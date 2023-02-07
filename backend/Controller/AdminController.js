/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const validateLoginInput = require('../Validation/Login');
const validateEmployee = require('../Validation/Employee');
const verify = require('../Middleware/AdminVerification');
const Employee = require('../Model/EmployeeSchema');

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
    console.log(req.body);
    console.log(req.file);
    const token = req.headers.authorization;
    const verified = verify.verify(token);
    console.log(verified);
    if (verified) {
      const { errors, isValid } = validateEmployee(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      Employee.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        genter: req.body.genter,
        email: req.body.email,
        mobile: req.body.mobile,
        image: {
          name: req.file.filename,
          path: req.file.path,
        },
      }).then(() => {
        res.json({
          success: true,
          message: 'Employee added successfully',
        });
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'invalid token',
      });
    }
  },
  employees: (req, res) => {
    const token = req.headers.authorization;
    const verified = verify.verify(token);
    console.log(verified);
    if (verified) {
      Employee.find({}).then((employees) => {
        res.json({
          success: true,
          employees,
        });
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'invalid token',
      });
    }
  },
};
