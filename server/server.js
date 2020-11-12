const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');
const port = 3001;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log('your server is running');

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


