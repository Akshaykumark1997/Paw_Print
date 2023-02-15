const express = require('express');
const userController = require('../Controller/UserController');
const verify = require('../Middleware/UserVerification');

const router = express.Router();

router.post('/register', userController.signUp);
router.post('/login', userController.login);
router.post('/verifyOtp', verify.verify, userController.verifyOtp);
// router.get('/deleteOtp/:id', userController.deleteOtp);
router.post('/resendOtp', userController.resendOtp);
router.post('/appointment', verify.verify, userController.appointment);
module.exports = router;
