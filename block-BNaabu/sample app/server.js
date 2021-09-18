var express = require("express");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));

app.use("/admin", (req, res, next) => {
  next("Unauthorised User");
});

app.get("/", (req, res) => {
  res.send("Welcome to node");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.use((req, res, next) => {
  res.send(" 404 Page not found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("Server listin at 3000");
});
