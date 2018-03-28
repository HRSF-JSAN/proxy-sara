const request = require('request-promise');
const redis = require('../redis/index');

const headers = {
  'Content-Type': '',
};

  const photosCSS = (res) => {
    request({
      url: 'http://localhost:3030/style.css',
      method: 'GET',
    }).on('error', (err) => {
      console.log(err);
    }).pipe(res);
  };

  const photosClientBundle = (res) => {
    request({
      url: 'http://localhost:3030/bundle.js',
      method: 'GET',
    }).on('error', (err) => {
      console.log(err);
    }).pipe(res);
  };

  const photosServerBundle = (res) => {
    request({
      url: 'http://localhost:3030/server-bundle.js',
      method: 'GET',
    }).on('error', (err) => {
      console.log(err);
    }).pipe(res);
  };

  const fetchPhotos = (id) => {
    return request({
      url: `http://localhost:3030/pictures/${id}`,
      method: 'GET',
    });
  };

  const checkPhotoCache = (id, res) => {
    redis.get(`/Photos/${id}`, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end();
      } else if (data === null) {
        fetchPhotos(id)
          .then((photos) => {
            headers['Content-Type'] = 'application/json';
            res.writeHead(200, headers);
            res.end(photos);
            redis.setData(`/Photos/${id}`, photos);
          })
          .catch((error) => {
            res.writeHead(500);
            res.end();
          });
        
      } else {
        data = JSON.parse(data);
        headers['Content-Type'] = 'application/json';
        res.writeHead(200, headers);
        res.end(data);
      }
    });
  };

  // .get('/title/:id', (req, res) => {
  //   request({
  //     url: `http://foodigotitle-env.us-west-1.elasticbeanstalk.com${req.path}`,
  //     method: req.method,
  //   }).on('error', (err) => {
  //     throw new Error(err);
  //   }).pipe(res);
  // })
  // .get('/map/:id', (req, res) => {
  //   request({
  //     url: `http://foodigotitle-env.us-west-1.elasticbeanstalk.com${req.path}`,
  //     method: req.method,
  //   }).on('error', (err) => {
  //     throw new Error(err);
  //   }).pipe(res);
  // })
  // .get('/ca5f7af07bcf83d9dd2487687a1d5bda.jpg', (req, res) => {
  //   request({
  //     url: 'http://foodigotitle-env.us-west-1.elasticbeanstalk.com/ca5f7af07bcf83d9dd2487687a1d5bda.jpg',
  //     method: req.method,
  //   }).pipe(res);
  // })
  // .get('/restaurant/ca5f7af07bcf83d9dd2487687a1d5bda.jpg', (req, res) => {
  //   request({
  //     url: 'http://foodigotitle-env.us-west-1.elasticbeanstalk.com/ca5f7af07bcf83d9dd2487687a1d5bda.jpg',
  //     method: req.method,
  //   }).pipe(res);
  // })
  // .get('/restaurants/:id/reviews', (req, res) => {
  //   request({
  //     url: `http://foodigoreviews.us-west-1.elasticbeanstalk.com${req.path}`,
  //     method: req.method,
  //   }).on('error', (err) => {
  //     throw new Error(err);
  //   }).pipe(res);
  // })
  // .get('/information/:id', (req, res) => {
  //   request({
  //     url: `http://foodigosidebar-env.us-east-2.elasticbeanstalk.com${req.path}`,
  //     method: req.method,
  //   }).on('error', (err) => {
  //     throw new Error(err);
  //   }).pipe(res);
  // })
  // .get('/restaurant/:id', (req, res) => {
  //   res.render('index', { id: req.params.id });
  // })
  // .post('/restaurants/:id/reviews', (req, res) => {
  //   request({
  //     url: `http://foodigoreviews.us-west-1.elasticbeanstalk.com${req.path}`,
  //     method: req.method,
  //     json: req.body,
  //   }).pipe(res);
  // })
  // .post('/', (req, res) => {
  //   request({
  //     url: `http://foodigotitle-env.us-west-1.elasticbeanstalk.com${req.path}`,
  //     method: req.method,
  //     form: req.body,
  //   }).pipe(res);
  // })
  // .put('/restaurants/:id/reviews/:reviewId', (req, res) => {
  //   request({
  //     url: `http://foodigoreviews.us-west-1.elasticbeanstalk.com${req.path}`,
  //     method: req.method,
  //     json: req.body,
  //   }).pipe(res);
  // })
  // .get('/', (req, res) => {
  //   res.render('index', { id: Math.floor((Math.random() * (200 - 101)) + 101) });
  // });

module.exports.photosCSS = photosCSS;
module.exports.photosClientBundle = photosClientBundle;
module.exports.photosServerBundle = photosServerBundle;
module.exports.checkPhotoCache = checkPhotoCache;
module.exports.fetchPhotos = fetchPhotos;

