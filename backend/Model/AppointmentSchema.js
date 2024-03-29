const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    petName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
      default: 'Not Paid',
    },
    userId: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
    },
    employee: {
      type: String,
    },
    employeeStatus: {
      type: String,
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const appointment = mongoose.model('appointments', appointmentSchema);
module.exports = appointment;
