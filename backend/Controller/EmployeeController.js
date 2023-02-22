/* eslint-disable no-underscore-dangle */
/* eslint-disable import/order */
/* eslint-disable consistent-return */
const Employee = require('../Model/EmployeeSchema');
const validateLoginInput = require('../Validation/Login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const Appointment = require('../Model/AppointmentSchema');

dotenv.config();

module.exports = {
  login: (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Employee.findOne({ email: req.body.email }).then((employee) => {
      console.log(employee);
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
              expiresIn: 3600,
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
  getAppointments: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    console.log(decoded.id);
    Appointment.find({ employee: decoded.id }).then((appointments) => {
      console.log(appointments);
      if (!appointments) {
        res.status(400).json({
          success: false,
          message: 'No appointments available',
        });
      } else {
        res.json({
          success: true,
          appointments,
        });
      }
    });
  },
};
