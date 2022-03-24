const express = require("express");
const app = express();
const PORT = 8081;

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));

app.use(express.json());

// app.methond(route, (handler))
// (route, (req, response))

app.get("/posts", (req, res) => {
  res.status(200).send({
    userId: 1,
    postId: 1,
    title: "First Blog",
    body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  });
});

app.get("/posts/id", (req, res) => {
  res.status(200).send({
    userId: 1,
    postId: 1,
    title: "First Blog",
    body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  });
});

app.post("/post/2", (req, res) => {
  const { userId } = req.params;
  const { postId } = req.body;

  if (!logo) {
    res.status(418).send({ message: "we need a id" });
  }

  res.send({
    body: `title of your post ${postId} and ID of ${userId}`,
  });
});
