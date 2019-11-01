const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

const listPhonebook = require('./routes/phonebook.route');
const login = require('./routes/login.route');
const middlewareLogin = require('./validate/login.middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // used to take value of cookies
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/phonebook',middlewareLogin.checkCookies, listPhonebook);
app.use('/login', login)

app.listen(port, () => console.log('Server listen on port: ' +port));