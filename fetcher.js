const fs = require('fs');
const fetch = require('node-fetch');
const services = require('./services');

// takes an obj of web components addresses
const fetchBundles = (obj) => {
  Object.keys(obj).map(component => {
    const clientUrl = `${obj[component]}/bundle.js`;
    const serverUrl = `${obj[component]}/server-bundle.js`;

    const clientFile = `./bundles/${component}-bundle.js`;
    const serverFile = `./bundles/${component}-server-bundle.js`;

    const client = fs.createWriteStream(clientFile);
    const server = fs.createWriteStream(serverFile);

    fetch(clientUrl)
      .then(res => {
        res.body.pipe(client);
      })
      .catch(err => {
        console.log(`Error fetching ${component} client bundle`, err);
      });

    fetch(serverUrl)
      .then(res => {
        res.body.pipe(server);
      })
      .catch(err => {
        console.log(`Error fetching ${component} server bundle`, err);
      });
  });
};

fetchBundles(services);
