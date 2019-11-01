const db = require('../db');

module.exports.checkCookies = (req, res, next) => {
    if (!req.cookies.userId){
        res.redirect('/login');
        return;
    }

    let user = db.get('users').find({id : req.cookies.userId}).value();

    if(!user) {
        res.redirect('/login');
        return;
    }

    next();
};