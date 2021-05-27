const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => {
  return "your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log("New data added");
  } else {
    console.log("Note title taken!");
  }
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("notes removed"));
    saveNote(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No title found"));
  }
};

const listNote = () => {
  const notes = loadNotes();
  notes.forEach((element) => {
    console.log(element.title);
  });

  console.log(chalk.blue("Your notes...."));
};

const readNote = (title) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    console.log(chalk.red.inverse("Not Found Notes"));
  } else {
    console.log(`${chalk.blue(duplicateNote.title)} ${duplicateNote.body}`);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
