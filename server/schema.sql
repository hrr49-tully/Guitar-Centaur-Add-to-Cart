DROP DATABASE IF EXISTS Products;

CREATE DATABASE Products;

USE Products;

CREATE TABLE Items (
  id INT(11) NOT NULL AUTO_INCREMENT,
  description TEXT NOT NULL,
  price DECIMAL (10, 2),
  PRIMARY KEY (id)
);

CREATE TABLE Styles (
  id INT (11) NOT NULL AUTO_INCREMENT,
  style TEXT NOT NULL,
  quantity INT(11) NOT NULL,
  image_url TEXT NOT NULL,
  PRIMARY KEY(id)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

--  INSERT INTO Items (id, description, price) VALUES (1, "A beautiful blue guitar that will make any beginner sound like Eddie Van Halen", 179.99);