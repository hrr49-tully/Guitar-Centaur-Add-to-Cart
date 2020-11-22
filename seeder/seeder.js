const mysql = require('mysql');
const config = require('../db/config.js');
const faker = require('faker');
const connection = mysql.createConnection(config);

for(var i = 0; i < 100; i++) {
    var randomPrice = faker.random.float();
    var randomDescription = faker.commerce.productDescription();
    var sql = 'INSERT INTO Items (description, price) VALUES (?, ?)';
    var toInsert = [randomDescription, randomPrice];
    connection.query(sql, toInsert, function(err, response) {
      if(err) {
        console.log('couldn\'t connect to the database from seeder.js ');
      }
      console.log('successfully inserted items to database via seeder.js');
    });
}

for(var i = 0; i < 100; i++) {

  var style = faker.commerce.color();
  let image = `https://guitarimages.s3-us-west-2.amazonaws.com/Guitar_Image${i}.jpg`;
  var quantity = faker.random.number(1, 10);
  var sql = 'INSERT INTO Styles (style, image_url, quantity) VALUES (?, ?, ?)';
  var toInsert = [style, image, quantity];

  connection.query(sql, toInsert, function(err, response) {
    if(err) {
      console.log('Could not insert items into Styles database');
    }
    console.log('successfully inserted items into Styles database');
  });
}

connection.end();



