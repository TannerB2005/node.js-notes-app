const chalk = require('chalk')
const yargs  = require('yargs')
const notes = require('./notes')


// Customize yargs version
yargs.version('17.7.2')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body )
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing the note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note')
    }
})

// add, remove, read, list
yargs.parse()
