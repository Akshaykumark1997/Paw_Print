/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const validateRegisterInput = require('../Validation/Register');
const validateLoginInput = require('../Validation/Login');
const User = require('../Model/UserSchema');
const sendOtp = require('../Middleware/otp');
const otp = require('../Model/OtpSchema');

dotenv.config();

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
            const mailDetails = {
              from: process.env.GMAIL,
              to: user.email,
              subject: 'Paw Print  VERIFICATION',
              html: `<p>YOUR OTP FOR REGISTERING IN  Paw Print  IS <h1> ${sendOtp.OTP} <h1> </p> <p> expires in 
              10 minutes </p>`,
            };
            bcrypt.hash(sendOtp.OTP, 10, (err, otpHash) => {
              otp
                .create({
                  userId: user._id,
                  otp: otpHash,
                  createdAt: Date.now(),
                  expireAt: Date.now() + 600,
                })
                .then((otpData) => {
                  sendOtp.mailTransporter.sendMail(
                    mailDetails,
                    (errs, responses) => {
                      if (errs) {
                        res.status(400).json({
                          status: 'Failed',
                          message: errs.message,
                        });
                      } else {
                        console.log(responses);
                        const payload = {
                          id: otpData._id,
                          email: user.email,
                        };
                        jwt.sign(
                          payload,
                          process.env.SECRET,
                          {
                            expiresIn: 600,
                          },
                          (er, token) => {
                            if (er)
                              console.error('There is some error in token', er);
                            else {
                              res.status(200).json({
                                status: 'Pending',
                                success: true,
                                message: 'otp sent successfully',
                                data: {
                                  success: true,
                                  id: otpData._id,
                                  email: user.email,
                                  token: `Bearer ${token}`,
                                },
                              });
                            }
                          }
                        );
                      }
                    }
                  );
                });
            });
          });
        });
      }
    });
  },
  resendOtp: (req, res) => {
    const { email } = req.body;
    const { userId } = req.body;
    const mailDetails = {
      from: process.env.GMAIL,
      to: email,
      subject: 'Paw Print  VERIFICATION',
      html: `<p>YOUR OTP FOR REGISTERING IN  Paw Print  IS <h1> ${sendOtp.OTP} <h1> </p> <p> expires in 
              one hour </p>`,
    };
    bcrypt.hash(sendOtp.OTP, 10, (err, otpHash) => {
      otp
        .create({
          userId,
          otp: otpHash,
          createdAt: Date.now(),
          expireAt: Date.now() + 3600000,
        })
        .then((otpData) => {
          sendOtp.mailTransporter.sendMail(mailDetails, (errs, responses) => {
            if (errs) {
              res.status(400).json({
                status: 'Failed',
                message: errs.message,
              });
            } else {
              console.log(responses);
              const payload = {
                id: otpData._id,
                email,
              };
              jwt.sign(
                payload,
                process.env.SECRET,
                {
                  expiresIn: 600,
                },
                (er, token) => {
                  if (er) console.error('There is some error in token', er);
                  else {
                    res.status(200).json({
                      status: 'Pending',
                      success: true,
                      message: 'otp sent successfully',
                      data: {
                        success: true,
                        id: otpData._id,
                        email,
                        token: `Bearer ${token}`,
                      },
                    });
                  }
                }
              );
            }
          });
        });
    });
  },
  verifyOtp: (req, res) => {
    otp.findOne({ _id: req.body.id }).then((data) => {
      if (!data) {
        res.json({
          success: false,
          message:
            "Account doesn't exist or already verified . please signUp again",
        });
      } else {
        otp.findOne({ _id: req.body.id }).then((otpDetails) => {
          bcrypt.compare(req.body.otp, data.otp).then((valid) => {
            if (!valid) {
              res.json({ success: false, message: 'entered wrong otp' });
            } else {
              otp.deleteOne({ userId: req.body.userId }).then(() => {
                User.updateOne(
                  { _id: otpDetails.userId },
                  { $set: { verified: true, email: req.body.email } }
                ).then(() => {
                  res.json({
                    success: true,
                    message: 'registerd successfully',
                  });
                });
              });
            }
          });
        });
      }
    });
  },
  login: (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { email } = req.body;
    const { password } = req.body;
    User.findOne({ email }).then((user) => {
      if (!user) {
        errors.email = 'user not found';
        return res.status(400).json(errors);
      }
      if (user.blocked) {
        errors.blocked = 'blocked user';
        return res.status(400).json(errors);
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
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
                  userName: user.userName,
                  email: user.email,
                  id: user._id,
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
  userDetails: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    User.findOne({ _id: decoded.id })
      .then((user) => {
        res.json({
          success: true,
          user,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  editUser: (req, res) => {
    User.findOne({ _id: req.body._id }).then((user) => {
      if (user.email === req.body.email) {
        User.updateOne(
          { _id: req.body._id },
          {
            $set: {
              userName: req.body.userName,
              email: req.body.email,
              mobile: req.body.mobile,
            },
          }
        )
          .then(() => {
            res.json({
              success: true,
              message: 'updated successfully',
            });
          })
          .catch((error) => {
            res.status(400).json({
              success: false,
              error,
            });
          });
      } else {
        User.findOne({ email: req.body.email }).then((exist) => {
          if (exist) {
            res.status(400).json({ email: 'email already exist' });
          } else {
            const mailDetails = {
              from: process.env.GMAIL,
              to: req.body.email,
              subject: 'Paw Print  VERIFICATION',
              html: `<p>YOUR OTP FOR REGISTERING IN  Paw Print  IS <h1> ${sendOtp.OTP} <h1> </p> <p> expires in 
              10 minutes </p>`,
            };
            bcrypt.hash(sendOtp.OTP, 10, (err, otpHash) => {
              otp
                .create({
                  userId: user._id,
                  otp: otpHash,
                  createdAt: Date.now(),
                  expireAt: Date.now() + 600,
                })
                .then((otpData) => {
                  sendOtp.mailTransporter.sendMail(
                    mailDetails,
                    (errs, responses) => {
                      if (errs) {
                        res.status(400).json({
                          status: 'Failed',
                          message: errs.message,
                        });
                      } else {
                        console.log(responses);
                        const payload = {
                          id: otpData._id,
                          email: req.body.email,
                        };
                        jwt.sign(
                          payload,
                          process.env.SECRET,
                          {
                            expiresIn: 600,
                          },
                          (er, token) => {
                            if (er)
                              console.error('There is some error in token', er);
                            else {
                              res.status(200).json({
                                status: 'Pending',
                                success: true,
                                otp: true,
                                message: 'otp sent successfully',
                                data: {
                                  success: true,
                                  id: otpData._id,
                                  email: req.body.email,
                                  token: `Bearer ${token}`,
                                },
                              });
                            }
                          }
                        );
                      }
                    }
                  );
                });
            });
          }
        });
      }
    });
  },
  donatedUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((user) => {
        res.json({
          success: true,
          user,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  users: (req, res) => {
    User.find({})
      .then((users) => {
        res.json({
          success: true,
          users,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  block: (req, res) => {
    User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          blocked: true,
        },
      }
    )
      .then(() => {
        res.json({
          success: true,
          message: 'Blocked successfully',
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  unBlock: (req, res) => {
    User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          blocked: false,
        },
      }
    )
      .then(() => {
        res.json({
          success: true,
          message: 'Unblocked successfully',
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
};
