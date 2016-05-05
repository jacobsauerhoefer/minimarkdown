///<reference path="../../typings/main.d.ts"/>
import express = require("express");
import app = require("../server")

export function api() {

  app.get('/user/bob', function (req: express.Request, res: express.Response) {
      res.send({ name: "bob" });
  });

}