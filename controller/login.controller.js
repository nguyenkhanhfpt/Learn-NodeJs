const db = require('../db');

module.exports.viewLogin = (req, res) => {
    res.render('aut/login');
}

module.exports.postLogin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let user = db.get('users').find({email : email}).value();

    if (!user) {
        res.render('aut/login', {
            error : ['Email does not exits.'],
            values : req.body
        });
        return;
    }

    if (user.password !== password) {
        res.render('aut/login', {
            error : ['Wrong password'],
            values : req.body
        });
        return;
    }

    res.redirect('/phonebook');
}

