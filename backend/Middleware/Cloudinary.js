// eslint-disable-next-line import/no-extraneous-dependencies
const cloudinary = require('cloudinary').v2;
// eslint-disable-next-line import/no-extraneous-dependencies
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'pawPrint',
    allowedFormats: ['jpeg', 'png', 'jpg'],
  },
});
module.exports = {
  cloudinary,
  storage,
};
