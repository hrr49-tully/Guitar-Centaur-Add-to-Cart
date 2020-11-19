const mysql = require('mysql');
const config = require('./config.js');
const faker = require('faker');
const connection = mysql.createConnection(config);

const getValues = (callback) => {
  var sql = 'SELECT * FROM Items';
    connection.query(sql, function(err, response) {
    console.log('querying database...');
      if(err) {
        callback(err, null);
        return;
      } else {
        callback(null, response);
        return;
      }
  });
}

const getStyles = (callback) => {
  var sql = 'SELECT * FROM Styles';
  connection.query(sql, function(err, response) {
    if(err) {
      callback(err, null);
      return;
    } else {
      callback(null, response);
      return;
    }
  });
}

module.exports = {
  getValues,
  getStyles
}