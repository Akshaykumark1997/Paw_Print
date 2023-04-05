/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const validateAppointment = require('../Validation/Appointment');
const Appointment = require('../Model/AppointmentSchema');
const instance = require('../Middleware/Razorpay.js');
const Employee = require('../Model/EmployeeSchema');

module.exports = {
  appointment: (req, res) => {
    const { errors, isValid } = validateAppointment(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Appointment.create({
      name: req.body.name,
      petName: req.body.petName,
      email: req.body.email,
      mobile: req.body.mobile,
      date: req.body.date,
      time: req.body.time,
      userId: decoded.id,
      service: req.body.service,
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
            paymentId: req.body.payment.razorpay_payment_id,
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
  appoitmentDetails: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Appointment.find({ userId: decoded.id })
      .sort({ _id: -1 })
      .then((appointments) => {
        res.json({
          success: true,
          appointments,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  cancelAppointment: (req, res) => {
    Appointment.findOne({ _id: req.body.id })
      .then((appointment) => {
        instance.payments
          .refund(appointment.paymentId, {
            amount: '100',
            speed: 'optimum',
            receipt: `${req.body.id}`,
          })
          .then(() => {
            Appointment.updateOne(
              { _id: req.body.id },
              {
                $set: {
                  paymentStatus: 'Refund',
                },
              }
            )
              .then(() => {
                res.json({
                  success: true,
                  message:
                    'Refund initiated and Amount will created to your account in 3 bussiness days',
                });
              })
              .catch((error) => {
                res.status(400).json({
                  success: false,
                  error,
                });
              });
          })
          .catch((error) => {
            res.status(400).json({
              success: false,
              error,
            });
          });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  assignEmployee: (req, res) => {
    Appointment.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          employee: req.params.eid,
        },
      }
    )
      .then((appointment) => {
        Employee.updateOne(
          { _id: req.params.eid },
          {
            $push: {
              appointments: {
                date: appointment.date,
                time: appointment.time,
              },
            },
          }
        ).then(() => {
          res.json({
            sucess: true,
            message: 'employee Assigned successfully',
          });
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  getAppointments: (req, res) => {
    Appointment.find({ paymentStatus: 'Paid' })
      .sort({ _id: -1 })
      .then((appointments) => {
        Employee.find({}).then((employees) => {
          res.json({
            success: true,
            appointments,
            employees,
          });
        });
      });
  },
  getAppointmentsEmployee: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Appointment.find({ employee: decoded.id })
      .sort({ _id: -1 })
      .then((appointments) => {
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
  changeStatus: (req, res) => {
    Appointment.updateOne(
      { _id: req.params.id },
      {
        $set: {
          employeeStatus: req.params.value,
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
  },
  getTimeSlot: (req, res) => {
    Employee.aggregate([
      {
        $match: {
          position: 'Clinic Staff',
        },
      },
      {
        $facet: {
          empCount: [{ $count: 'count' }],
          dates: [
            { $unwind: '$appointments' },
            {
              $group: {
                _id: {
                  date: '$appointments.date',
                  time: '$appointments.time',
                },
                count: { $sum: 1 },
              },
            },
          ],
        },
      },
      {
        $unwind: '$empCount',
      },
      {
        $addFields: {
          dates: {
            $filter: {
              input: '$dates',
              as: 'date',
              cond: { $eq: ['$$date.count', '$empCount.count'] },
            },
          },
        },
      },
      {
        $project: {
          dates: 1,
        },
      },
    ])
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
};
