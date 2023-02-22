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
    employee: {
      type: String,
    },
    employeeStatus: {
      type: String,
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const appointment = mongoose.model('appointments', appointmentSchema);
module.exports = appointment;
