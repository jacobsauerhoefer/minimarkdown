var express = require('express');
var app = express();
var exports = module.exports = {};
var port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

var server = app.listen(port, function () {
  console.log('Server started on port ' + port);
});

exports.closeServer = function () {
  server.close();
};
