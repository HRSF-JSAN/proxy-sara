const express = require('express');

const router = express.Router();

router
  .get('/title:id', (req, res) => {
    console.log('title!');
    res.end()
  })
  .get('/map/:id', (req, res) => {
    console.log('map!');
    res.end()
  })
  .all('/+', (req, res) => {
    res.sendStatus(404);
  })


module.exports = router;