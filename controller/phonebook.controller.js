const db = require('../db');

module.exports.index = (req, res) => {
    res.render('phonebook/index', {
        list: db.get('list').value()
    });
};

module.exports.search = (req, res) => {
    let valueQuery = req.query.q;

    let listFilter = db.get('list').value().filter((person) => {
        return person.name.toLowerCase().indexOf(valueQuery.toLowerCase()) !== -1;
    });

    res.render('phonebook/index', {
        list: listFilter
    });
};

module.exports.viewAdd = (req, res) => {
    res.render('phonebook/viewAdd');
};