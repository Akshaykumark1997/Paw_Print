/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const multer = require('multer');
const adminController = require('../Controller/AdminController');
const { storage } = require('../Middleware/Cloudinary.js');

const upload = multer({ storage });

const router = express.Router();

router.post('/', adminController.login);
router.post(
  '/addEmployee',
  upload.single('image'),
  adminController.addEmployee
);
router.get('/employees', adminController.employees);
router.post('/addService', upload.single('image'), adminController.addService);

module.exports = router;
