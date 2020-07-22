const path = require("path"); // we use to combine path strings
const fs = require("fs");
const { request } = require("http");
const { response } = require("express");
const router = require("express").Router(); //we use it to create a routes

router.get("/notes",(req, res) =>{ //reading db.json file
    fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data) {
                    if (err) throw err; // if error in reading throw error
                    res.json(JSON.parse(data)); // if not respond with data (all the notes)
               }); // json parse converts notes from string to json format
}) // res json just anwers in json
router.post ("/notes", (req,res)=>{
    var title = req.body.title; // getting the title and the body from the reques
    var text = req.body.text; // getting text from the request
    var note = {title: title, text: text};
    fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data) {
        if (err) throw err; // if error in reading throw error
      var notes = JSON.parse(data);
      note.id = notes.length > 0 ? notes[notes.length -1].id + 1 : 0; // new note id 
      notes.push(note);
      fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(notes), function(err){
          res.json(notes);

      });
   }); // json parse converts notes from string to json forma
})

router.delete ("/notes/:id", (req, res) =>{
    // to create delete route
    var id = req.params.id;
    fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data) {
        if (err) throw err; // if error in reading throw error
      var notes = JSON.parse(data);
      var filteredNotes = notes.filter(function(note){
      return note.id != id;
      })
      fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(filteredNotes), function(err){
          res.json(filteredNotes);

      });
   });
})

module.exports = router;