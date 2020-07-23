const path = require("path");
const fs = require("fs");
const router = require("express").Router(); 

router.get("/notes",(req, res) =>{ 
    fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data) {
                    if (err) throw err; 
                    console.log (JSON.parse(data), "say data")
                    res.json(JSON.parse(data)); 
               }); 
}) 
router.post ("/notes", (req,res)=>{
    var title = req.body.title; 
    var text = req.body.text; 
    var note = {title: title, text: text};
    fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data) {
        if (err) throw err; 
      var notes = JSON.parse(data);
      note.id = notes.length > 0 ? notes[notes.length -1].id + 1 : 0; 
      notes.push(note);
      fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(notes), function(err){
          res.json(notes);

      });
   }); 
})

router.delete ("/notes/:id", (req, res) =>{
    
    var id = req.params.id;
    fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data) {
        if (err) throw err; 
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