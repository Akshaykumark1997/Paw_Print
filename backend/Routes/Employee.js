const express = require('express');
const EmployeeController = require('../Controller/EmployeeController');
const verify = require('../Middleware/EmployeeVerification');
const AppointmentController = require('../Controller/AppointmentController');

const router = express.Router();

router.post('/login', EmployeeController.login);
router.get(
  '/appointments',
  verify.verify,
  AppointmentController.getAppointmentsEmployee
);
router.get(
  '/changeStatus/:id/:value',
  verify.verify,
  AppointmentController.changeStatus
);
router.get('/getEmployee', verify.verify, EmployeeController.getEmployee);

module.exports = router;
