const mysql = require('mysql');
const config = require('../db/config.js');
const faker = require('faker');
const connection = mysql.createConnection(config);

var randomPrice = faker.commerce.price();
var randomDescription = faker.commerce.productDescription();

var sql = 'INSERT INTO Items (description, price) VALUES (?, ?)';
var toInsert = [randomDescription, randomPrice];
connection.query(sql, toInsert, function(err, response) {
  if(err) {
    console.log('couldn\'t connect to the database from seeder.js ');
  }
  console.log('successfully inserted items to database via seeder.js');
})


