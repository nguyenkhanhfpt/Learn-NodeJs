const db = require('../db');

module.exports.checkCookies = (req, res, next) => {
    if (!req.signedCookies.userId){
        res.redirect('/login');
        return;
    }

    let user = db.get('users').find({id : req.signedCookies.userId}).value();

    if(!user) {
        res.redirect('/login');
        return;
    }

    next();
};