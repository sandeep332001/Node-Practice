const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./note");

//create add command
//add, remove, read,list

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list note",
  handler() {
    console.log(notes.listNote());
  },
});

yargs.command({
  command: "read",
  describe: "reading note",
  builder: {
    title: {
      describe: "read title",
    },
  },

  handler(argv) {
    notes.readNote(argv.title);
  },
});

console.log(yargs.argv);
