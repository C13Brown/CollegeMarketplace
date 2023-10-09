const express = require('express');
const router = express.Router();
const { register, login } = require('../controller/userController');

router.route('/').post(register).get(login);

module.exports = router;