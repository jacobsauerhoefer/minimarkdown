var request = require("request");
var helloWorld = require("../source/server.js");
var base_url = "http://localhost:3000/";

describe("Server should return user name", function() {
  describe("/api/v1.0/user/:name", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + "/api/v1.0/user/john", function(error, response) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url + "/api/v1.0/user/john", function(error, response, body) {
        expect(body).toBe({ name: "john" });
        helloWorld.closeServer();
        done();
      });
    });
  });
});
