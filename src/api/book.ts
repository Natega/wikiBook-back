import express from "express";
import BookService from "../services/bookService";
var router = express.Router();

// define the home page route
router.get("/id/:id", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  // 5e94b823d9d2ac23527a6f2d

  res.send(await BookService.getBookById(req.params.id));
});
router.get("/all", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  res.send(await BookService.getBooks());
});
router.post("/", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  //@TODO error
  res.send(await BookService.addBook(req.body));
});
router.delete("/", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  //@TODO error
  await BookService.deleteBook(req.body.id);
  res.send({ id: req.body.id });
});

module.exports = router;
