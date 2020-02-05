// Store class to handle all reading and writing to JSON file
const fs = require('fs');

class Store {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  addNote(newNote) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
      if (err) throw err;
      let oldNotes = JSON.parse(data);
      oldNotes.push(newNote);
      let id = oldNotes.length;
      newNote.id = id;
      let jsonString = JSON.stringify(oldNotes);
      fs.writeFile('./db.json', jsonString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      console.log(oldNotes);
    })
  }

  readNotes() {
    return fs.readFileSync('./db.json', 'utf8');
  }

  deleteNote(id) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
      if (err) throw err;
      let notes = JSON.parse(data);
      let updatedNotes = notes.filter(function(note) {
        return note.id != id;
      })
      let jsonString = JSON.stringify(updatedNotes);
      fs.writeFile('./db.json', jsonString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    })

  }
}

module.exports = Store;