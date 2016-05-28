"use strict";
var express = require("express");
var app = express();
var port = 3000;

require("./api/api.js")(app);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: "./application/public" });
});

var server = app.listen(port, function () {
    console.log('Server started on port ' + port);
});

exports.closeServer = function () {
    server.close();
};

exports.App = app;

// a.js
class A {
  // ...
}
module.exports = A;
