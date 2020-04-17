import express from "express";
import BookService from "../services/bookService";
var router = express.Router();

// define the home page route
router.get("/id/:_id", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  // 5e94b823d9d2ac23527a6f2d

  res.send(await BookService.getBookById(req.params._id));
});
router.get("/all", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  res.send(await BookService.getBooks());
});
router.post("/", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  res.send(await BookService.addBook(req.body));
});
router.delete("/", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  await BookService.deleteBook(req.body._id);
  res.send({ _id: req.body._id });
});
router.patch("/video/:_id", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  await BookService.addVideoBook(req.params._id, req.body.url);
  res.send({ url: req.body.url });
});

router.patch("/podcast/:_id", async function (req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  await BookService.addPodcastBook(req.params._id, req.body.url);
  res.send({ url: req.body.url });
});

module.exports = router;
