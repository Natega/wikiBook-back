import cors from "cors";
import express from "express";
var bodyParser = require("body-parser");
var book = require("../api/book");
var status = require("../api/status");

module.exports = {
  init({ app }: { app: express.Application }) {
    app.enable("trust proxy");
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/book", book);
    app.use("/status", status);
  },
};
