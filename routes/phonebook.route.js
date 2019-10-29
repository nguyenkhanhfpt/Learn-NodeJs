const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', (req, res) => {
    res.render('phonebook/index', {
        list: db.get('list').value()
    });
});




module.exports = router;