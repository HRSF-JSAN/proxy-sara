const express = require('express');
const parse = require('body-parser');
const router = require('./router');
const services = require('./services');

const app = express();

// app.use(parse.urlencoded({ extended: false }));
app.use(parse.json());
// app.use(express.static('public'));

const React = require('react');
const ReactDom = require('react-dom/server');
if (typeof window === 'undefined') {
  global.window = {};
}

// takes an array of component/App names and returns scripts to find the LOCAL bundles ie: '/Reviews/bundle.js'
const Scripts = require('./templates/scripts');
// takes an array of component/App names and returns scripts to find the LOCAL css files ie: '/Reviews/style.css'
const Links = require('./templates/links');
// takes each of the four RENDERED components (after invoking the render function)
const Body = require('./templates/app');
// takes links as string, body as string, and scripts as string
const Html = require('./templates/layout');


// takes an object, with keys of component names and values of server-bundles, and a props object (with id key);
// returns an array of the server-rendering of each component
const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    // need to pass in object with 'require(<server-bundle filepath>).default' as values for each component key
    let path = require(`./bundles/${item}-server-bundle.js`).default;
    console.log(path);
    let component = React.createElement(path, props);
    return ReactDom.renderToString(component);
  });
};

app.get('/', (req, res) => {
  const id = Math.floor(Math.random() * 100) + 101;
  let components = renderComponents(services, {itemid: id});
  res.end(Html(
    Links(['Photos']),
    Body(...components),
    Scripts(Object.keys(services))
  ));
});

app.use('/', router);

module.exports = app;





// these were used for templating -- not necessary with server-side rendering
// app.set('views', './views');
// app.set('view engine', 'pug');

// these are all used with the yelp api call which Nam has taken out
// const yelp = require('yelp-fusion');
// const client = yelp.client(process.env.APIKEY);
// app.get('/yelp/:term', (req, res) => {
//   const { term } = req.params;
//   client.search({
//     term,
//     location: 'san francisco, ca',
//   }).then(response => res.send(response.jsonBody.businesses[0]))
//     .catch((e) => { throw new Error(e); });
// });
