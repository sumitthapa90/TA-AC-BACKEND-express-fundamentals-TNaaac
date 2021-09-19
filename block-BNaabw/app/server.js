var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

//server
var app = express();

// inbuilt middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// third party middlewere
app.use(logger("dev"));
app.use(cookieParser());

//custom middlewere
app.use("/", (req, res, next) => {
  console.log(req.cookies);
  res.cookie("cookie", "This is cookie");
  next();
});

app.use("/admin", (req, res, next) => {
  next("unauthorizd");
});

// roughts
app.get("/route", (req, res) => {
  res.send("Welcome");
});

app.use("/user/:username", (req, res, next) => {
  var username = req.params.username;
  res.send(username);
});

//404 error

app.use((req, res, next) => {
  res.send("404 Error Page not found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log("Server listen at port 4000");
});
