const db = require('../db');
const md5 = require('md5');

module.exports.viewLogin = (req, res) => {
    res.render('aut/login');
}

module.exports.postLogin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let hassPassword = md5(password);

    let user = db.get('users').find({email : email}).value();

    if (!user) {
        res.render('aut/login', {
            error : ['Email does not exits.'],
            values : req.body
        });
        return;
    }

    if (user.password !== hassPassword) {
        res.render('aut/login', {
            error : ['Wrong password'],
            values : req.body
        });
        return;
    }

    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/phonebook');
}

