var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("My name is sumit");
});

app.listen(3000, () => {
  console.log("Server listin at port 3000");
})
