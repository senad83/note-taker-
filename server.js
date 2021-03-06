
const api = require("./routes/api");
const html = require("./routes/html");


var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


