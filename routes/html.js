const path = require("path"); 
const { request } = require("http");
const { response } = require("express");
const router = require("express").Router(); 

router.get("/notes", (request, response) => {
  response.sendFile (path.join(__dirname, "../public/notes.html"));
}); 
router.get("*", (req, res) => { 
    res.sendFile(path.join(__dirname, "../public/index.html")); 
  });
  
  module.exports = router;
  