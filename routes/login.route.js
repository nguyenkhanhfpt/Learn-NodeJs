const express = require('express');
const router = express.Router();

const controller = require('../controller/login.controller');

router.get('/', controller.viewLogin);

router.post('/', controller.postLogin);


module.exports = router;