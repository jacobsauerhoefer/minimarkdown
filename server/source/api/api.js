"use strict";

var api = function(app) {
    app.get('/api/v1.0/user/:name', function (req, res) {
        res.send({ name: req.params.name });
    });
}

module.exports = api;
