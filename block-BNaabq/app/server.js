var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// third party middlewere

app.use(logger("dev"));
app.use(cookieParser());

app.use((res, req, next) => {
  console.log(req.cookies);
});

app.use("/about", (res, req, next) => {
  res.cookie("username", "sumit");
  res.end("About page");
});

// rought
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(2822, () => {
  console.log("Server listin at port 2822");
});
