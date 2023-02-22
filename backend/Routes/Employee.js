const express = require('express');
const EmployeeController = require('../Controller/EmployeeController');
const verify = require('../Middleware/UserVerification');

const router = express.Router();

router.post('/login', EmployeeController.login);
router.get('/appointments', verify.verify, EmployeeController.getAppointments);

module.exports = router;
