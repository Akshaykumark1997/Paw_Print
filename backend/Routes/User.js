const express = require('express');
const userController = require('../Controller/UserController');

const router = express.Router();

router.post('/register', userController.signUp);
router.post('/login', userController.login);
router.post('/verifyOtp', userController.verifyOtp);
router.post('/appointment', userController.appointment);
module.exports = router;
