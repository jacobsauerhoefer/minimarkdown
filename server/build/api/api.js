"use strict";
var app = require("../server");
function api() {
    app.get('/user/bob', function (req, res) {
        res.send({ name: "bob" });
    });
}
exports.api = api;
//# sourceMappingURL=api.js.map