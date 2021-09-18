var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (res, req) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/new", (res, req) => {
  res.sendFile(__dirname + "/new");
});

app.post("/new", (res, req) => {
  res.json(req.body);
});

app.get("/users/:username", (res, req) => {
  let username = req.params.username;
  res.send(username);
});

app.listen(9000, () => {
  console.log("Server listin at port 9000");
});
