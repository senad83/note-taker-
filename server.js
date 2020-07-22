
const api = require("./routes/api");
const html = require("./routes/html");


var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// put those api and html routs in the app (lines 18,19)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);
// ROUTER activity 15
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// chirs

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


