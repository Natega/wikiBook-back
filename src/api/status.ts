import express from "express";
var router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
  res.status(200).end();
});
router.head("/", (req, res) => {
  res.status(200).end();
});
module.exports = router;
