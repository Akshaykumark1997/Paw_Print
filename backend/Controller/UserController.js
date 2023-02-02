/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");
const validateRegisterInput = require('../Validation/Register');
// const validateLoginInput = require("../Validation/Login");
const User = require('../Model/UserSchema');
const sendOtp = require('../Middleware/otp');
const otp = require('../Model/OtpSchema');

module.exports = {
  signUp: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then((exist) => {
      if (exist) {
        res.status(400).json({ email: 'email already exist' });
      } else {
        bcrypt.hash(req.body.password, 10, (error, hash) => {
          User.create({
            userName: req.body.userName,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hash,
            verified: false,
          }).then((user) => {
            console.log(user);
            const mailDetails = {
              from: process.env.GMAIL,
              to: user.email,
              subject: 'Paw Print  VERIFICATION',
              html: `<p>YOUR OTP FOR REGISTERING IN  Paw Print  IS <h1> ${sendOtp.OTP} <h1> </p> <p> expires in 
              one hour </p>`,
            };
            bcrypt.hash(sendOtp.OTP, 10, (err, otpHash) => {
              otp
                .create({
                  // eslint-disable-next-line no-underscore-dangle
                  userId: user._id,
                  otp: otpHash,
                  createdAt: Date.now(),
                  expireAt: Date.now() + 3600000,
                })
                .then(() => {
                  console.log('hoooiiiiii');
                  sendOtp.mailTransporter.sendMail(
                    mailDetails,
                    (errs, responses) => {
                      if (errs) {
                        console.log('errorr');
                        res.status(400).json({
                          status: 'Failed',
                          message: errs.message,
                        });
                      } else {
                        console.log(responses);
                        res.status(200).json({
                          status: 'Pending',
                          success: true,
                          message: 'otp sent successfully',
                          data: {
                            // eslint-disable-next-line no-underscore-dangle
                            userId: user._id,
                            email: user.email,
                          },
                        });
                      }
                    }
                  );
                });
            });
            // res.json({ success: true, user });
          });
        });
      }
    });
  },
  verifyOtp: (req, res) => {
    console.log(req.body);
    otp.findOne({ userId: req.body.userId }).then((data) => {
      console.log(data);
      if (!data) {
        res.json({
          message:
            "Account doesn't exist or already verified . please signUp again",
        });
      } else if (data.expireAt < Date.now()) {
        otp.deleteOne({ userId: req.body.userId }).then(() => {
          res.json({ message: 'otp expired try again' });
        });
      } else {
        bcrypt.compare(req.body.otp, data.otp).then((valid) => {
          if (!valid) {
            res.json({ message: 'entered wrong otp' });
          } else {
            User.updateOne(
              { _id: req.body.userId },
              { $set: { verified: true } }
            ).then(() => {
              res.json({ message: 'registerd successfully' });
            });
          }
        });
      }
    });
  },
};
