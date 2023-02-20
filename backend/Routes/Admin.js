/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const multer = require('multer');
const adminController = require('../Controller/AdminController');
const { storage } = require('../Middleware/Cloudinary.js');
const validate = require('../Middleware/AdminVerification');

const upload = multer({ storage });

const router = express.Router();

router.post('/', adminController.login);
router.post(
  '/addEmployee',
  validate.verify,
  upload.single('image'),
  adminController.addEmployee
);
router.get('/employees', adminController.employees);
router.post(
  '/addService',
  validate.verify,
  upload.single('image'),
  adminController.addService
);
router.get('/services', validate.verify, adminController.services);
router.get('/appointments', validate.verify, adminController.getAppointments);

module.exports = router;
