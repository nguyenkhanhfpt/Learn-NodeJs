const db = require('../db');

module.exports.index = (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let numberDis = 4;

    let maxPar = Math.ceil(db.get('products').value().length / numberDis);
    let start = (page - 1) * numberDis;
    let end = page * numberDis;
    let display = page + 2 > maxPar ? page + 1 > maxPar ? page : page + 1 : page + 2;

    res.render('products/index', {
        products : db.get('products').value().slice(start, end),
        startPar : page,
        endPar : display,
        before : page - 1 < 1 ? page : page - 1, 
        next : page + 1 > maxPar ? maxPar : page + 1
    });
};