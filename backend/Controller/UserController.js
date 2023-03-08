/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require('crypto');
const validateRegisterInput = require('../Validation/Register');
const validateLoginInput = require('../Validation/Login');
const validateDonation = require('../Validation/Donation');
const validateAppointment = require('../Validation/Appointment');
const validateAdoption = require('../Validation/Adoption');
const User = require('../Model/UserSchema');
const sendOtp = require('../Middleware/otp');
const otp = require('../Model/OtpSchema');
const Appointment = require('../Model/AppointmentSchema');
const Donation = require('../Model/DonationSchema');
const instance = require('../Middleware/Razorpay.js');
const Service = require('../Model/ServiceSchema');
const Adoption = require('../Model/AdoptionSchema');

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
                        console.log('errorr');
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
                              console.log('success');
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
              console.log('errorr');
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
                    console.log('success');
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
    console.log(req.body);
    otp.findOne({ _id: req.body.id }).then((data) => {
      console.log(data);
      if (!data) {
        res.json({
          success: false,
          message:
            "Account doesn't exist or already verified . please signUp again",
        });
      } else {
        bcrypt.compare(req.body.otp, data.otp).then((valid) => {
          console.log(valid);
          if (!valid) {
            res.json({ success: false, message: 'entered wrong otp' });
          } else {
            otp.deleteOne({ userId: req.body.userId }).then(() => {
              User.updateOne(
                { _id: req.body.userId },
                { $set: { verified: true } }
              ).then(() => {
                res.json({ success: true, message: 'registerd successfully' });
              });
            });
          }
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
              expiresIn: 3600,
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
  appointment: (req, res) => {
    const { errors, isValid } = validateAppointment(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Appointment.create({
      name: req.body.name,
      petName: req.body.petName,
      email: req.body.email,
      mobile: req.body.mobile,
      date: req.body.date,
      time: req.body.time,
    })
      .then((data) => {
        const options = {
          amount: 300000,
          currency: 'INR',
          // eslint-disable-next-line prefer-template
          receipt: '' + data._id,
        };
        instance.orders.create(options, (err, order) => {
          if (err) {
            console.log(err);
            res.status(400).json({
              success: false,
              err,
            });
          } else {
            res.json(order);
          }
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  verifyPayment: (req, res) => {
    console.log(req.body);
    let hmac = crypto.createHmac('sha256', process.env.KETSECRET);
    hmac.update(
      `${req.body.payment.razorpay_order_id}|${req.body.payment.razorpay_payment_id}`
    );
    hmac = hmac.digest('hex');
    if (hmac === req.body.payment.razorpay_signature) {
      Appointment.updateOne(
        { _id: req.body.details.receipt },
        {
          $set: {
            paymentStatus: 'Paid',
          },
        }
      )
        .then(() => {
          res.json({
            success: true,
            message: 'Payment completed successfully',
          });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            error,
          });
        });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment failed',
      });
    }
  },
  donate: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    console.log(decoded);
    const { errors, isValid } = validateDonation(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Donation.create({
      petName: req.body.petName,
      age: req.body.age,
      breed: req.body.breed,
      vaccinated: req.body.vaccinated,
      description: req.body.description,
      userId: decoded.id,
      image: {
        name: req.file.filename,
        path: req.file.path,
      },
    })
      .then((donation) => {
        res.json({
          success: true,
          message: 'pet added successfully',
          donation,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          error,
        });
      });
  },
  getPets: (req, res) => {
    Donation.find({})
      .then((donations) => {
        res.json({
          success: true,
          donations,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  petDetails: (req, res) => {
    Donation.findOne({ _id: req.params.id })
      .then((petDetails) => {
        res.json({
          success: true,
          petDetails,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  services: (req, res) => {
    Service.find({})
      .then((services) => {
        res.json({
          success: true,
          services,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  serviceDetails: (req, res) => {
    Service.findOne({ _id: req.params.id })
      .then((service) => {
        res.json({
          success: true,
          service,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  adoption: (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateAdoption(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Adoption.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobile: req.body.mobile,
      email: req.body.email,
      houseName: req.body.houseName,
      streetName: req.body.streetName,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      pincode: req.body.pincode,
      petName: req.body.petName,
      pet: req.body.pet,
      breed: req.body.breed,
      description: req.body.description,
      petId: req.body.petId,
      userId: req.body.userId,
    })
      .then(() => {
        res.json({
          success: true,
          message: 'Application sent successfully',
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
