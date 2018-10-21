var express = require('express');
var path = require('path');
var parseBody = require('body-parser');

var app = express();
var port = 3000;

console.log(path.join(__dirname, '../client/dist'));

app.use(express.static(path.join(__dirname, '../client/dist')));



app.listen(port, () => {
  console.log('listening on port ' + port);
})

