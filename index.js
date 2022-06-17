const express = require("express");
const app = express();
const port = 3008;
const path = require("path");

app.set("create", "./redditcreate");
app.set("home", "./reddithome");

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/reddithome.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
