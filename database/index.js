var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movieList'
});

dbConnection.connect();

var getAll = (callback) => {
  var queryString = 'SELECT * FROM movies';
  dbConnection.query(queryString, (error, results, fields) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

var insertMovie = (movieTitle, callback) => {
  var queryString = 'INSERT INTO movies (title) VALUES (?)';
  dbConnection.query(queryString, movieTitle, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
} 

module.exports.getAll = getAll;
module.exports.insertMovie = insertMovie;