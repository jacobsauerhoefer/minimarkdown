///<reference path="../typings/main.d.ts"/>
import * as express from "express";
import * as api from "./api/api";
var app = express();
// var exports = module.exports = {};
var port = 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html', { root : "./public" });
});

var server = app.listen(port, function() {
  console.log('Server started on port ' + port);
});

exports.closeServer = function() {
  server.close();
};

export var App = app;