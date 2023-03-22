/* eslint-disable import/extensions */
const express = require('express');
const multer = require('multer');
const userController = require('../Controller/UserController');
const verify = require('../Middleware/UserVerification');
const { storage } = require('../Middleware/Cloudinary.js');

const upload = multer({ storage });

const router = express.Router();

router.post('/register', userController.signUp);
router.post('/login', userController.login);
router.post('/verifyOtp', userController.verifyOtp);
// router.get('/deleteOtp/:id', userController.deleteOtp);
router.post('/resendOtp', userController.resendOtp);
router.post('/appointment', verify.verify, userController.appointment);
router.post('/verifyPayment', verify.verify, userController.verifyPayment);
router.post(
  '/donate',
  verify.verify,
  upload.single('image'),
  userController.donate
);
router.get('/pets', verify.verify, userController.getPets);
router.get('/petDetails/:id', verify.verify, userController.petDetails);
router.get('/services', verify.verify, userController.services);
router.get('/serviceDetails/:id', verify.verify, userController.serviceDetails);
router.post('/adoption', verify.verify, userController.adoption);
router.get('/userDetails', verify.verify, userController.userDetails);
router.post('/editUser', verify.verify, userController.editUser);
router.get(
  '/appointmentDetails',
  verify.verify,
  userController.appoitmentDetails
);
router.post(
  '/cancelAppointment',
  verify.verify,
  userController.cancelAppointment
);
router.get('/donatedPets', verify.verify, userController.donatedPets);
router.get('/applications', verify.verify, userController.applications);
router.get(
  '/editDonatedPet/:id',
  verify.verify,
  userController.editDonatedPetDetails
);
router.post(
  '/editDonatedPet',
  verify.verify,
  upload.single('image'),
  userController.editDonatedPet
);
router.get(
  '/applicationStatus',
  verify.verify,
  userController.applicationStatus
);
router.get(
  '/changeAdoptionStatus/:id',
  verify.verify,
  userController.changeAdoptionStatus
);
router.get('/donatedUser/:id', verify.verify, userController.donatedUser);
module.exports = router;
