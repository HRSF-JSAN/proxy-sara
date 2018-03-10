const express = require('express');

const router = express.Router();
const request = require('request');

router
  .get('/title/:id', (req, res) => {
    request({
      url: `http://foodigotitle-env.us-west-1.elasticbeanstalk.com${req.path}`,
      method: req.method,
    }).on('error', (err) => {
      throw new Error(err);
    }).pipe(res);
  })
  .get('/map/:id', (req, res) => {
    request({
      url: `http://foodigotitle-env.us-west-1.elasticbeanstalk.com${req.path}`,
      method: req.method,
    }).on('error', (err) => {
      throw new Error(err);
    }).pipe(res);
  })
  .get('/ca5f7af07bcf83d9dd2487687a1d5bda.jpg', (req, res) => {
    request({
      url: 'http://foodigotitle-env.us-west-1.elasticbeanstalk.com/ca5f7af07bcf83d9dd2487687a1d5bda.jpg',
      method: req.method,
    }).pipe(res);
  })
  .get('/restaurant/ca5f7af07bcf83d9dd2487687a1d5bda.jpg', (req, res) => {
    request({
      url: 'http://foodigotitle-env.us-west-1.elasticbeanstalk.com/ca5f7af07bcf83d9dd2487687a1d5bda.jpg',
      method: req.method,
    }).pipe(res);
  })
  .get('/restaurants/:id/reviews', (req, res) => {
    request({
      url: `http://foodigoreviews.us-west-1.elasticbeanstalk.com${req.path}`,
      method: req.method,
    }).on('error', (err) => {
      throw new Error(err);
    }).pipe(res);
  })
  .get('/pictures/:id', (req, res) => {
    request({
      url: `http://foodigopictures.us-west-1.elasticbeanstalk.com${req.path}`,
      method: req.method,
    }).on('error', (err) => {
      throw new Error(err);
    }).pipe(res);
  })
  .get('/information/:id', (req, res) => {
    request({
      url: `http://foodigosidebar-env.us-east-2.elasticbeanstalk.com${req.path}`,
      method: req.method,
    }).on('error', (err) => {
      throw new Error(err);
    }).pipe(res);
  })
  .get('/restaurant/:id', (req, res) => {
    res.render('index', { id: req.params.id });
  })
  .post('/restaurants/:id/reviews', (req, res) => {
    request({
      url: `http://foodigoreviews.us-west-1.elasticbeanstalk.com${req.path}`,
      method: req.method,
      json: req.body,
    }).pipe(res);
  })
  .post('/', (req, res) => {
    request({
      url: `http://foodigotitle-env.us-west-1.elasticbeanstalk.com${req.path}`,
      method: req.method,
      form: req.body,
    }).pipe(res);
  })
  .put('/restaurants/:id/reviews/:reviewId', (req, res) => {
    request({
      url: `http://foodigoreviews.us-west-1.elasticbeanstalk.com${req.path}`,
      method: req.method,
      json: req.body,
    }).pipe(res);
  })
  .get('/', (req, res) => {
    res.render('index', { id: Math.floor((Math.random() * (200 - 101)) + 101) });
  });

module.exports = router;
