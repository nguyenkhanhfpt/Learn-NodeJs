const db = require('../db');

module.exports.index = (req, res) => {
    res.render('phonebook/index', {
        list: db.get('list').value()
    });
};