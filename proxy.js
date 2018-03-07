const express = require('express');
const morgan = require('morgan');
const request = require('request');
const path = require('path');
const url = require('url');
const router = require('./router');

const app = express();

app.use(morgan('dev'));
//  app.set('views', './views')
app.set('view engine', 'pug')

app.set('port', 3004);
app.use(express.static(__dirname));

app.get('/restaurant/styles.css', (req, res) => {
    const fileName = req.path
    var options = {
        headers: {
            root: __dirname,
            'Content-Type': 'text/css'
        }
    };
    res.sendFile(__dirname + '/styles.css', options)
})

app.get('/restaurant/:id', (req, res) => {
    res.render('index', { id: req.params.id})
})

app.use('/', router);

module.exports = app;