var express = require('express');
var path = require('path');
var parseBody = require('body-parser');
var databaseMethods = require('../database/index.js');

var app = express();
var port = 3000;

console.log(path.join(__dirname, '../client/dist'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', (req, res) => {
  databaseMethods.getAll((error, results) => {
    if(error) {
      console.log(error);
    } else {
      res.status(200).send(results);
    }
  });
});



app.listen(port, () => {
  console.log('listening on port ' + port);
})

