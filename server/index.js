var express = require('express');
var path = require('path');
var parseBody = require('body-parser');
var databaseMethods = require('../database/index.js');

var app = express();
var port = 3000;

console.log(path.join(__dirname, '../client/dist'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(parseBody.text());

app.get('/movies', (req, res) => {
  databaseMethods.getAll((error, results) => {
    if(error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/addMovie', (req, res) => {
  databaseMethods.insertMovie(req.body, (error, results, fields) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).end();
    }
  });
});



app.listen(port, () => {
  console.log('listening on port ' + port);
})

