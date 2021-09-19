var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var app = express();

//inbuilt middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//thirdparty midlewere
app.use(logger("dev"));
app.use(cookieParser());

//custom middlewere
app.use("/", (req, res, next) => {
  console.log(req.cookies);
  res.cookie("cookie", "This is a cookie");
  next();
});

app.use("/admin", (req, res, next) => {
  next("unauthorized user");
});

//roughts
app.get("/", (rej, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h2> Welcome to Express");
});

app.get("/about", (rej, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("My name is qwerty");
});

app.post("/form", (req, res) => {
  res.json(req.body);
});

app.post("/json", (req, res) => {
  res.send(req.body);
});

app.get("/user/:username", (req, res) => {
  var username = req.params.username;
  res.send(`<h2> ${username}</h2>`);
});

//404 error
app.use((req, res, next) => {
  res.send("404 page not found");
});

//custom error

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("Server listin at port 3000");
});
