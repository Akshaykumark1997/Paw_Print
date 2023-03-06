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
router.post('/verifyOtp', verify.verify, userController.verifyOtp);
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
module.exports = router;
