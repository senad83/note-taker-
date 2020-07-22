const path = require("path"); // we use to combine path strings
const { request } = require("http");
const { response } = require("express");
const router = require("express").Router(); //we use it to create a routes

router.get("/notes", (request, response) => {
  response.sendFile (path.join(__dirname, "../public/notes.html"));
}); // added another route to notes.html
router.get("*", (req, res) => { // creating a route to handle wild card
    res.sendFile(path.join(__dirname, "../public/index.html")); // responding with a file index
  });
  
  module.exports = router;
  