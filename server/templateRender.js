const React = require('react');
const ReactDom = require('react-dom/server');
const services = require('./services');
const redis = require('../redis/index.js');
if (typeof window === 'undefined') {
  global.window = {};
}

const Scripts = require('../templates/scripts');
const Links = require('../templates/links');
const Body = require('../templates/app');
const Html = require('../templates/layout');

const headers = {
  'Content-Type': '',
}

// takes an object, with keys of component names and values of server-bundles, and a props object (with id key);
// returns an array of the server-rendering of each component
const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    // need to pass in object with 'require(<server-bundle filepath>).default' as values for each component key
    let path = require(`../bundles/${item}-server-bundle.js`).default;
    // console.log(path);
    let component = React.createElement(path, props);
    return ReactDom.renderToString(component);
  });
};


const templateRender = (id, res) => {
  const props = { id }
    let components = renderComponents(services, props);
    headers['Content-Type'] = 'text/html';
    res.writeHead(200, headers);
    res.end(Html(
      Links(['Photos']),
      Body(...components),
      Scripts(Object.keys(services), props)
    ));
}

module.exports = templateRender;
