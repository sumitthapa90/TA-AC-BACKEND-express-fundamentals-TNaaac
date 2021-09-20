var express = require("express");
const { json } = require("express");

var app = express();

app.use((res, req, next) => {
  let current = new Date();
  console.log(req.method, req.url, current);
  next();
});

app.post("/", (req, res) => {
  let data = req.body;
  console.log(req.body);
  res.send(JSON.parse(data));
});

app.listen(5000, () => {
  console.log("Server listin at port 5000");
});
