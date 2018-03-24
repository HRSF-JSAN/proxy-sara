const router = require('router');

const handlerFunc = (req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(400);
    res.end();
  }
};

module.exports = handlerFunc;
