// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

const Store = require("./assets/js/store");

// Routes
// =============================================================

// Basic route that sends the user first to the home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to send user to notes page
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// Route to get json response for GET method
app.get("/api/notes", function(req, res) {
  const notes = new Store().readNotes();
  console.log(notes);
  res.json(JSON.parse(notes));
})

// Route to read db.json file and call deleteNote function
app.delete("/api/notes/:noteId", function(req, res) {
  const myStore = new Store();
  const deleteNote = req.params.noteId;
  myStore.deleteNote(deleteNote);
  console.log(deleteNote);
  const updatedStore = myStore.readNotes();
  res.json(updatedStore);
})

// Route to read db.json file and call addNote function
app.post('/api/notes', function(req, res) {
  const newNote = req.body;
  new Store().addNote(newNote)
  console.log(newNote);
  res.json(newNote);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});