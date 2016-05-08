var request = require("request");
// var helloWorld = require("../source/server.js");
var base_url = "http://localhost:3000/";

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    // it("returns Hello World", function(done) {
    //   request.get(base_url, function(error, response, body) {
    //     expect(body).toBe("<h1>Hello World</h1>");
    //     helloWorld.closeServer();
    //     done();
    //   });
    // });
  });
});
