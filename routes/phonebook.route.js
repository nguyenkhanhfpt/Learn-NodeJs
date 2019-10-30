const express = require('express');
const router = express.Router();

const controller = require('../controller/phonebook.controller');
const validate = require('../validate/middleware');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/viewAdd', controller.viewAdd);

router.post('/add',validate.middleware, controller.addPerson);

router.get('/view/:ID', controller.viewPerson);



module.exports = router;