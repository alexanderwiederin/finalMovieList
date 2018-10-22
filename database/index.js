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

module.exports.getAll = getAll;