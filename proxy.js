const express = require('express');
const morgan = require('morgan');
const request = require('request');
const path = require('path');
const url = require('url');

const app = express();

app.use(morgan('dev'));

app.set('port', process.env.PORT || 3004);

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, '../title-map/client/dist')));

app.get('/title/:id', (req, res) => {
    request({
      url: `http://localhost:3001${req.path}`,
      method: req.method,
    }).pipe(res)
});
app.get('/map/:id', (req, res) => {
    request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
  }).pipe(res)
});


app.listen(app.get('port'), () => console.log(`sever listening on ${app.get('port')}`));
