DROP DATABASE IF EXISTS movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50),
  PRIMARY KEY(id)
);

INSERT INTO movies (title) VALUES 
('Mean Girls'),
('Hackers'),
('The Grey'),
('Sunshine'),
('Ex Machina');