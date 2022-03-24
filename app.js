const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const postRoute = require("./routes/posts");

require("dotenv/config");

app.use(express.json());

// app.methond(route, (handler))
// (route, (req, response))

app.get("/", (req, res) => {
  res.send("We are on home");
});

app.use("/posts", postRoute);

console.log(process.env.DB_CONNECTION);

mongoose.connect(process.env.DB_CONNECTION, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected MongoDB!!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));
