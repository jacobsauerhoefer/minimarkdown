"use strict";
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: "./public" });
});
var server = app.listen(port, function () {
    console.log('Server started on port ' + port);
});
exports.closeServer = function () {
    server.close();
};
exports.App = app;
//# sourceMappingURL=server.js.map