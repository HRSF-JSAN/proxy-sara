const router = require('./router');
// const redis = require('../redis/index');
const SSRender = require('./templateRender');

const handlerFunc = (req, res) => {
  const getLast = (num) => {
    const reqLength = req.url.length;
    const slicePoint = reqLength - num;
    return req.url.slice(slicePoint);
  };

  if (req.method !== 'GET') {
    res.writeHead(400);
    res.end();

  //CSS routes
  } else if (req.url === '/style.css') {
    router.CSS(res);
  } else if (req.url === '/Photos/style.css') {
    router.photosCSS(res);
  } else if (req.url === '/Reviews/style.css') {
    router.reviewsCSS(res);
  } else if (getLast(36) === 'ca5f7af07bcf83d9dd2487687a1d5bda.jpg') {
    router.fetchStar(res);
  } else if (req.url === '/Sidebar/style.css') {
    router.sidebarCSS(res);

  //client bundles
  } else if (req.url === '/Photos/bundle.js') {
    router.photosClientBundle(res);
  } else if (req.url === '/Reviews/bundle.js') {
    router.reviewsClientBundle(res);
  } else if (req.url === '/Sidebar/bundle.js') {
    router.sidebarClientBundle(res);
  } else if (req.url === '/TitleMap/bundle.js') {
    router.titleMapClientBundle(res);

  //component GET routes
  } else if (req.url.slice(0, 10) === '/pictures/') {
    const id = req.url.slice(10);
    router.fetchPhotoCache(id, res);

  } else if (req.url.slice(0, 7) === '/title/') {
    const id = req.url.slice(7);
    router.fetchTitlesCache(id, res);
  } else if (req.url.slice(0, 9) === '/address/') {
    const id = req.slice(9);
    router.fetchMapsCache(id, res);

  } else if (getLast(8) === '/reviews') {
    let id = req.url.slice(13);
    const length = req.url.length;
    id = id.split('');
    id = id.splice(0, length - 8);
    
  } else if (req.url.slice(0, 13) === '/information/') {
    const id = req.url.slice(13);
    router.fetchSidebarCache(id, res);


  // general proxy routes
  } else if (req.url === '/') {
    const id = Math.floor(Math.random() * 100) + 101;
    SSRender(id, res);
  } else if (req.url.slice(0, 12) === '/restaurant/') {
    const id = Number(req.url.slice(12));
    SSRender(id, res);
  } else {
    res.writeHead(404);
    res.end();
  }
};

module.exports = handlerFunc;
