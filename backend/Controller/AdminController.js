/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const validateLoginInput = require('../Validation/Login');

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
        { expiresIn: 360000 },
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
  validate: (req, res) => {
    const token = req.headers.authorization;
    if (token) {
      const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
      if (decoded) {
        res.json({
          token: true,
        });
      } else {
        res.json({
          token: false,
        });
      }
    } else {
      res.json({
        token: false,
      });
    }
  },
};
