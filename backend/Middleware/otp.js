// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mailTransporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAILPASS,
    },
  }),

  OTP: `${Math.floor(1000 + Math.random() * 9000)}`,
};
