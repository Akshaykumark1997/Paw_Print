const mongoose = require('mongoose');

const { Schema } = mongoose;

const otpSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  otp: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
  },
  expireAt: {
    type: Date,
  },
});

const otp = mongoose.model('otp', otpSchema);
module.exports = otp;
