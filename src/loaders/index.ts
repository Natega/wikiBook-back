import express from "express";
const loaderExpress = require("./express");
import mongoose from "./mongoose";
const loader = {
  async init({ app }: { app: express.Application }) {
    loaderExpress.init({ app });
    await mongoose();
  },
};
module.exports = loader;
