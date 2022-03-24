const express = require("express");
const router = express.Router();
const Post = require("../models/posts.model");

router.get("/", (req, res) => {
  res.status(200).send({
    userId: 1,
    postId: 1,
    title: "First Blog",
    body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  });
});

router.get("/specific", (req, res) => {
  res.status(200).send({
    userId: 1,
    postId: 2,
    title: "specific Blog",
    body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  });
});

router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
