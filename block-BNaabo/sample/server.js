var express = require("express");

var app = express();

app.use((req, res, next) => {
  console.log(req.method, res.url);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.post("/json", (req, res) => {
  console.log(req.body);
});

app.post("/contact", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("Server listin at port 5000");
});
