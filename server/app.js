const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db');
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/values', (req, res) => {
  db.getValues((err, response) => {
    if(err) {
      res.status(404);
      res.end();
    } else {
      // console.log('hello from app.js!!');
      res.status(201).send(response);
    }
  });
});

module.exports = app;