module.exports.middleware = (req, res, next) => {
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
    
    next();
};