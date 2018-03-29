const fs = require('fs');
const path = require('path');
const request = require('request-promise');
const redis = require('../redis/index');

const headers = {
  'Content-Type': '',
};


// CSS Routes
const CSS = (res) => {
  fs.readFile(path.resolve(__dirname, '../public/styles.css'), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      headers['Content-Type'] = 'text/css';
      res.writeHead(200, headers);
      res.end(data);
    }
  });
}

const photosCSS = (res) => {
  request({
    url: 'http://ec2-54-67-87-237.us-west-1.compute.amazonaws.com/style.css',
    method: 'GET',
  }).on('error', (err) => {
    console.log(err);
  }).pipe(res);
};

const reviewsCSS = (res) => {
  request({
      url: 'http://ec2-54-193-64-165.us-west-1.compute.amazonaws.com/style.css',
      method: 'GET',
    }).on('error', (err) => {
      console.log(err);
    }).pipe(res);
};

const sidebarCSS = (res) => {
  request({
      url: 'http://ec2-54-183-73-195.us-west-1.compute.amazonaws.com:3400/style.css',
      method: 'GET',
    }).on('error', (err) => {
      console.log(err);
    }).pipe(res);
};

const fetchStar = (res) => {
  request({
    url: 'http://ec2-18-216-34-101.us-east-2.compute.amazonaws.com:3500/ca5f7af07bcf83d9dd2487687a1d5bda.jpg',
    method: 'GET',
  }).on('error', (err) => {
    console.log(err);
  }).pipe(res);
};


// Client Bundle Routes
const photosClientBundle = (res) => {
  request({
    url: 'http://ec2-54-67-87-237.us-west-1.compute.amazonaws.com/bundle.js',
    method: 'GET',
  }).on('error', (err) => {
    console.log(err);
  }).pipe(res);
};

const reviewsClientBundle = (res) => {
  request({
    url: 'http://ec2-54-193-64-165.us-west-1.compute.amazonaws.com/bundle.js',
    method: 'GET',
  }).on('error', (err) => {
    console.log(err);
  }).pipe(res);
};

const titleMapClientBundle = (res) => {
  request({
    url: 'http://ec2-18-216-34-101.us-east-2.compute.amazonaws.com:3500/bundle.js',
    method: 'GET',
  }).on('error', (err) => {
    console.log(err);
  }).pipe(res);
};

const sidebarClientBundle = (res) => {
  request({
    url: 'http://ec2-54-183-73-195.us-west-1.compute.amazonaws.com:3400/bundle.js',
    method: 'GET',
  }).on('error', (err) => {
    console.log(err);
  }).pipe(res);
};



// Photos routes
const fetchPhotos = (id) => {
  return request({
    url: `http://ec2-54-67-87-237.us-west-1.compute.amazonaws.com/pictures/${id}`,
    method: 'GET',
  });
};

const fetchPhotoCache = (id, res) => {
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


// Reviews routes
const fetchReviews = (id) => {
  return request({
    url: `http://ec2-54-193-64-165.us-west-1.compute.amazonaws.com/restaurants/${id}/reviews`,
    method: 'GET',
  });
};

const fetchReviewsCache = (id, res) => {
  redis.get(`/Reviews/${id}`, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else if (data === null) {
      fetchReviews(id)
        .then((reviews) => {
          headers['Content-Type'] = 'application/json';
          res.writeHead(200, headers);
          res.end(reviews);
          redis.setData(`/Reviews/${id}`, reviews);
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


// //sidebar routes
const fetchSidebar = (id) => {
  return request({
    url: `http://ec2-54-183-73-195.us-west-1.compute.amazonaws.com:3400/information/${id}`,
    method: 'GET',
  });
};

const fetchSidebarCache = (id, res) => {
  redis.get(`/Sidebar/${id}`, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else if (data === null) {
      fetchSidebar(id)
        .then((reviews) => {
          headers['Content-Type'] = 'application/json';
          res.writeHead(200, headers);
          res.end(reviews);
          redis.setData(`/Sidebar/${id}`, reviews);
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




//title-map routes

const fetchTitles = (id) => {
  return request({
    url: `http://ec2-18-216-34-101.us-east-2.compute.amazonaws.com:3500/title/${id}`,
    method: 'GET',
  });
};

const fetchTitlesCache = (id, res) => {
  redis.get(`/Title/${id}`, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else if (data === null) {
      fetchTitles(id)
        .then((reviews) => {
          headers['Content-Type'] = 'application/json';
          res.writeHead(200, headers);
          res.end(reviews);
          redis.setData(`/Title/${id}`, reviews);
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

const fetchMaps = (id) => {
  return request({
    url: `http://ec2-18-216-34-101.us-east-2.compute.amazonaws.com:3500/address/${id}`,
    method: 'GET',
  });
};

const fetchMapsCache = (id, res) => {
  redis.get(`/Map/${id}`, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else if (data === null) {
      fetchMaps(id)
        .then((reviews) => {
          headers['Content-Type'] = 'application/json';
          res.writeHead(200, headers);
          res.end(reviews);
          redis.setData(`/Map/${id}`, reviews);
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


module.exports.CSS = CSS;
module.exports.photosCSS = photosCSS;
module.exports.reviewsCSS = reviewsCSS;
module.exports.sidebarCSS = sidebarCSS;
module.exports.fetchStar = fetchStar;

module.exports.photosClientBundle = photosClientBundle;
module.exports.reviewsClientBundle = reviewsClientBundle;
module.exports.titleMapClientBundle = titleMapClientBundle;
module.exports.sidebarClientBundle = sidebarClientBundle;

module.exports.fetchPhotoCache = fetchPhotoCache;
module.exports.fetchReviewsCache = fetchReviewsCache;
module.exports.fetchSidebarCache = fetchSidebarCache;
module.exports.fetchMapsCache = fetchMapsCache;
module.exports.fetchTitlesCache = fetchTitlesCache;

