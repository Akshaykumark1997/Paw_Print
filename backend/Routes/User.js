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
router.post(
  '/donate',
  verify.verify,
  upload.single('image'),
  userController.donate
);
module.exports = router;
