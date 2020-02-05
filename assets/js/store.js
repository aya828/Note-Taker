// Store class to handle all reading and writing to JSON file
const fs = require('fs');

class Store {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  readFile() {
    fs.readFile('./db.json', "utf8", function(err) {
      if (err) {
        return console.log(err);
      }
    });
  }

  writeFile() {
    fs.writeFile('./db.json', "utf8", function(err) {=
      if (err) {
        return console.log(err);
      }
    });
  }

  appendFile() {
    fs.appendFile('./db.json', "utf8", function(err) {
      if (err) {
        return console.log(err);
      }
    });
  }

  deleteFromFile() {
    fs.unlink('./db.json', function(err) {
      if (err) {
        return console.log(err);
      }
    });
  }
}

module.exports = Store;