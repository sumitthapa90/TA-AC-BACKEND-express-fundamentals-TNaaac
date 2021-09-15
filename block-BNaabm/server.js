var express = require("express");

var app = express();

function midwere(res, req, next) {
  console.log(req.meth, req.url);
  next();
}

app.use(midwere);

app.get("/", (req, res) => {
  res.send("My name is sumit thapa from Dharamshala");
});

app.listen(4000, () => {
  console.log("Server listin at port 4000");
});
