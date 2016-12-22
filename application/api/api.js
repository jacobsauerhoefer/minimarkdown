"use strict";
var fs = require('fs');

var api = function(app) {
    app.post('/api/v1.0/saveMarkdown', function (req, res) {
        fs.writeFile("application/public/about/content.md", req.body.markdown, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
            res.redirect(req.header('Referer'));
        });
    });
}

module.exports = api;
