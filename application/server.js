"use strict";
var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

app.use(express.static('application/public'));
app.use(bodyParser.urlencoded());

require("./api/api.js")(app);

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