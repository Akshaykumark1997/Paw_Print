const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  genter: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    name: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const employee = mongoose.model('employee', EmployeeSchema);
module.exports = employee;
