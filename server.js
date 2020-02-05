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
  res.json()
})

app.post('/notes', function(req, res) {
  const newNote = req.body;
  console.log(newNote);
  res.json(newNote);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});