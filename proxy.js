const express = require('express');
const parse = require('body-parser');
const router = require('./router');

const app = express();

app.use(parse.urlencoded({ extended: false }));
app.use(parse.json());
app.use(express.static('views'));
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', router);

module.exports = app;
