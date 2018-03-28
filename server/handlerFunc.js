const router = require('./router');
// const redis = require('../redis/index');
const SSRender = require('./templateRender');

const handlerFunc = (req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(400);
    res.end();

  } else if (req.url === '/') {
    const id = Math.floor(Math.random() * 100) + 101;
    SSRender(id, res);

  } else if (req.url.slice(0, 12) === '/restaurant/') {
    const id = Number(req.url.slice(12));
    SSRender(id, res);

  } else if (req.url === '/Photos/style.css') {
    router.photosCSS(res);

  } else if (req.url === '/Photos/bundle.js') {
    router.photosClientBundle(res);

  } else if (req.url === '/Photos/server-bundle.js') {
    router.photosServerBundle(res); 

  } else if (req.url.slice(0, 10) === '/pictures/') {
    const id = req.url.slice(10);
    router.checkPhotoCache(id, res);

  } else {
    res.writeHead(404);
    res.end();
  }
};

module.exports = handlerFunc;
