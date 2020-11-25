const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db');
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/values', (req, res) => {
  db.getValues((err, response) => {
    if(err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

app.get('/api/styles', (req, res) => {
  db.getStyles((err, response) => {
    if(err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
})

app.get('/:item_id', (req, res) => {
  res.sendFile(`${PUBLIC_DIR}/index.html`);
});

module.exports = app;