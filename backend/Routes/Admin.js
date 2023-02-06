const express = require('express');
const adminController = require('../Controller/AdminController');

const router = express.Router();

router.post('/', adminController.login);

module.exports = router;
