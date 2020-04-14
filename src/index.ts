const loaders = require("./loaders");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const result = dotenv.config();

console.log(result.parsed);
function startServer() {
  const app = express();
  loaders.init({ app });

  app.listen(process.env.PORT, (err: unknown) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready !`);
  });
}

startServer();
