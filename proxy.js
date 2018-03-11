const express = require('express');
const parse = require('body-parser');
const router = require('./router');

const yelp = require('yelp-fusion');

const client = yelp.client(process.env.APIKEY);


const app = express();

app.use(parse.urlencoded({ extended: false }));
app.use(parse.json());
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/yelp/:term', (req, res) => {
  const { term } = req.params;
  client.search({
    term,
    location: 'san francisco, ca',
  }).then(response => res.send(response.jsonBody.businesses[0]))
    .catch((e) => { throw new Error(e); });
});

app.use('/', router);

module.exports = app;
