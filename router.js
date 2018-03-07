const express = require('express');
const router = express.Router();
const request = require('request');

router
  .get('/title/:id', (req, res) => {
    request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
  }).pipe(res)
  })
  .get('/map/:id', (req, res) => {
      request({
      url: `http://localhost:3001${req.path}`,
      method: req.method,
    }).pipe(res)
  })
  .get('/restaurants/:id/reviews', (req, res) => {
      request({
      url: `http://localhost:8001${req.path}`,
      method: req.method,
    }).pipe(res)
  })
  .get('/pictures/:id', (req, res) => {
      request({
      url: `http://localhost:3000${req.path}`,
      method: req.method,
    }).pipe(res)
  })
  .get('/information/:id', (req, res) => {
      request({
      url: `http://localhost:3400${req.path}`,
      method: req.method,
    }).pipe(res)
  });

  module.exports = router;