require('newrelic');
const http = require('http');
const request = require('request');

const services = require('./services');
const handler = require('./handlerFunc');
const fetch = require('./fetcher');

const app = http.createServer(handler);

fetch(services);

setInterval(() => {
  fetch(services);
}, 1000 * 60 * 60 * 24); // ms * sec * min * hours = day

const port = process.env.PORT || 3600;

app.listen(port, () => console.dir(`server listening on ${port}`));

