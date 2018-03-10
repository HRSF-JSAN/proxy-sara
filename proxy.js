const express = require('express');
const parse = require('body-parser');
const router = require('./router');

const app = express();

app.use(parse.urlencoded({ extended: false }));
app.use(parse.json());
app.set('view engine', 'pug');


app.set('port', process.env.PORT || 3004);

app.use('/', router);

module.exports = app;
