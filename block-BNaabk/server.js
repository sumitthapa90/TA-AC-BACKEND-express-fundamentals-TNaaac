var experss = require("express");

var app = express();

app.get("./", (req, res) => {
  res.send("My name is sumit");
});

app.listin(3000, () => {
  console.log("Server listin at port 3000");
});
