const express = require('express');
const app = express();
const port = 3000;

var listPhonebook = require('./routes/phonebook.route');
var login = require('./routes/login.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/phonebook', listPhonebook);
app.use('/login', login)

app.listen(port, () => console.log('Server listen on port: ' +port));