/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const multer = require('multer');
const adminController = require('../Controller/AdminController');
const { storage } = require('../Middleware/Cloudinary.js');
const validate = require('../Middleware/AdminVerification');
const AppointmentController = require('../Controller/AppointmentController');
const ServiceConstroller = require('../Controller/ServiceConstroller');
const AdoptionController = require('../Controller/AdoptionController');
const EmployeeController = require('../Controller/EmployeeController');
const UserController = require('../Controller/UserController');

const upload = multer({ storage });

const router = express.Router();

router.post('/', adminController.login);
router.get('/check', adminController.validate);
router.post(
  '/addEmployee',
  validate.verify,
  upload.single('image'),
  EmployeeController.addEmployee
);
router.get('/employees', validate.verify, EmployeeController.employees);
router.get(
  '/employeeAssign/:id/:eid',
  validate.verify,
  AppointmentController.assignEmployee
);
router.post(
  '/addService',
  validate.verify,
  upload.single('image'),
  ServiceConstroller.addService
);
router.get('/services', validate.verify, ServiceConstroller.getServices);
router.get('/editService/:id', validate.verify, ServiceConstroller.editService);
router.post(
  '/editService',
  validate.verify,
  upload.single('image'),
  ServiceConstroller.editServicePost
);
router.get(
  '/deleteService/:id',
  validate.verify,
  ServiceConstroller.deleteService
);
router.get(
  '/appointments',
  validate.verify,
  AppointmentController.getAppointments
);
router.get('/getAdoption', validate.verify, AdoptionController.getAdoption);
router.get(
  '/editAdoption/:id',
  validate.verify,
  AdoptionController.getEditAdoption
);
router.post(
  '/editAdoption',
  validate.verify,
  upload.single('image'),
  AdoptionController.editAdoption
);
router.get(
  '/deleteAdoption/:id',
  validate.verify,
  AdoptionController.deleteAdoption
);
router.get('/users', validate.verify, UserController.users);
router.get('/block/:id', validate.verify, UserController.block);
router.get('/unBlock/:id', validate.verify, UserController.unBlock);

module.exports = router;
