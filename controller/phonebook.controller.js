const db = require('../db');
const shortid = require('shortid');

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

module.exports.addPerson = (req, res) => {
    req.body.id = shortid.generate();

    let err = [];
    if (!req.body.name) {
        err.push('Name is empty!');
    }
    if (!req.body.phone) {
        err.push('Phone is empty!');
    }
    if(err.length){
        res.render('phonebook/viewAdd', {
            error : err, 
            values: req.body  // keep values in form after check validate
        });
        return;
    }

    db.get('list').push(req.body).write();

    res.redirect('/phonebook');
};

module.exports.viewPerson = (req, res) => {
    let id = req.params.ID;

    let viewPerson = db.get('list').find({ id: id }).value();

    res.render('phonebook/viewPerson', {
        person : viewPerson
    });
};