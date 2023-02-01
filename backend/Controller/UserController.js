/* eslint-disable consistent-return */
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../Validation/Register");
// const validateLoginInput = require("../Validation/Login");
const User = require("../Model/UserSchema");

module.exports = {
  signUp: (req, res) => {
    const { errors, isVaild } = validateRegisterInput(req.body);
    if (!isVaild) {
      return res.json(errors);
    }

    User.findOne({ email: req.body.email }).then((exist) => {
      if (exist) {
        res.json({ email: "email already exist" });
      } else {
        bcrypt.hash(req.body.password, 10, (error, hash) => {
          User.create({
            userName: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hash,
          }).then((user) => res.json(user));
        });
      }
    });
  },
};
