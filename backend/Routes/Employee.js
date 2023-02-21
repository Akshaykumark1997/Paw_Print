const express = require('express');
const EmployeeController = require('../Controller/EmployeeController');

const router = express.Router();

router.post('/login', EmployeeController.login);

module.exports = router;
