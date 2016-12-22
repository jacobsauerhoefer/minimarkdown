"use strict";
var fs = require('fs');
const url = require('url');

var api = function(app) {
    app.post('/api/v1.0/saveMarkdown', function (req, res) {
        var parsedURL = url.parse(req.header('Referer'));
        fs.writeFile("application/public" + parsedURL.pathname + "content.md", req.body.markdown, function(err) {
            if(err) {
                return console.log(err);
            }
            res.redirect(req.header('Referer'));
        });
    });
}

module.exports = api;
