/* eslint-disable import/extensions */
const express = require('express');
const multer = require('multer');
const userController = require('../Controller/UserController');
const verify = require('../Middleware/UserVerification');
const { storage } = require('../Middleware/Cloudinary.js');
const AppointmentController = require('../Controller/AppointmentController');
const ServiceConstroller = require('../Controller/ServiceConstroller');
const AdoptionController = require('../Controller/AdoptionController');
const ApplicationController = require('../Controller/ApplicationController');

const upload = multer({ storage });

const router = express.Router();

router.post('/register', userController.signUp);
router.post('/login', userController.login);
router.get('/validateLogin', userController.validate);
router.post('/verifyOtp', userController.verifyOtp);
router.post('/resendOtp', userController.resendOtp);
router.post('/appointment', verify.verify, AppointmentController.appointment);
router.post(
  '/verifyPayment',
  verify.verify,
  AppointmentController.verifyPayment
);
router.post(
  '/donate',
  verify.verify,
  upload.single('image'),
  AdoptionController.donate
);
router.get('/pets', verify.verify, AdoptionController.getPets);
router.get('/petDetails/:id', verify.verify, AdoptionController.petDetails);
router.get('/services', verify.verify, ServiceConstroller.services);
router.get(
  '/serviceDetails/:id',
  verify.verify,
  ServiceConstroller.serviceDetails
);
router.post('/adoption', verify.verify, AdoptionController.adoption);
router.get('/userDetails', verify.verify, userController.userDetails);
router.put('/editUser', verify.verify, userController.editUser);
router.get(
  '/appointmentDetails',
  verify.verify,
  AppointmentController.appoitmentDetails
);
router.patch(
  '/cancelAppointment',
  verify.verify,
  AppointmentController.cancelAppointment
);
router.get('/donatedPets', verify.verify, AdoptionController.donatedPets);
router.get('/applications', verify.verify, ApplicationController.applications);
router.get(
  '/editDonatedPet/:id',
  verify.verify,
  AdoptionController.editDonatedPetDetails
);
router.put(
  '/editDonatedPet',
  verify.verify,
  upload.single('image'),
  AdoptionController.editDonatedPet
);
router.get(
  '/applicationStatus',
  verify.verify,
  ApplicationController.applicationStatus
);
router.patch(
  '/changeAdoptionStatus/:id',
  verify.verify,
  ApplicationController.changeAdoptionStatus
);
router.get('/donatedUser/:id', verify.verify, userController.donatedUser);
module.exports = router;
