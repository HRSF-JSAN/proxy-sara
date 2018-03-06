const express = require('express');
const morgan = require('morgan');
const request = require('request');
const path = require('path');
const url = require('url');
const router = require('./router');

const app = express();

app.use(morgan('dev'));

app.set('port', process.env.PORT || 3004);

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, '../title-map/client/dist')));


app.get('/:id', (req, res) => {
    request({
      url: `http://localhost:3001${req.path}`,
      method: req.method,
    }).pipe(res)
  });

app.use('/', router);




app.listen(app.get('port'), () => console.log(`sever listening on ${app.get('port')}`));
