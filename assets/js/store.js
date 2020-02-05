// Store class to handle all reading and writing to JSON file
const fs = require('fs');

class Store {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  addNote(newNote) {
    // Read db.json file
    fs.readFile('./db.json', 'utf8', function(err, data) {
      if (err) throw err;
      // parse read data
      let oldNotes = JSON.parse(data);
      oldNotes.push(newNote);
      // Add id to notes obj
      let id = oldNotes.length;
      newNote.id = id;
      let jsonString = JSON.stringify(oldNotes);
      // Write data to db.json file
      fs.writeFile('./db.json', jsonString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    })
  }

  // Return read data from db.json file
  readNotes() {
    return fs.readFileSync('./db.json', 'utf8');
  }

  // Delete from notes obj in db.json file
  deleteNote(id) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
      if (err) throw err;
      let notes = JSON.parse(data);
      // Read file then filter out notes obj to remove note with deleted id note
      let updatedNotes = notes.filter(function(note) {
        return note.id != id;
      })
      let jsonString = JSON.stringify(updatedNotes);
      fs.writeFile('./db.json', jsonString, (err) => {
        if (err) throw err;
      });
    })

  }
}

module.exports = Store;