console.log(`-------------------------------------starting app.js-------------------------------------`);

const fs   = require('fs');
const _    = require('lodash');

const titleOptions = {
	describe :'Title of the note',
	demand : true, //	the title is required 
	alias : 't'
};

const bodyOptions ={
	describe : 'The content of the note',
	demand : true,
	alias : 'b'
};

console.log(`process object:`,process.argv);

const argv = require('yargs') //	parse command line arguments
			.command('add','add a new note',{
				title : titleOptions,
				body : bodyOptions
			})
			.command('remove','delete an existing note',{
				title : titleOptions
			})
			.command('list','prints all the notes')
			.command('read','get a specific note',{
				title : titleOptions
			})
			.help()
			.argv;

const notes = require('./notes.js')

var command = process.argv[2]; 
var newNote, removeNote;
	//the second argument we pass on the command line : 
	// the first argument is node
	// the second argument is our file app.js

console.log('command: ', command);// command == argv._[0]
console.log('process: ', process.argv);
console.log('yargs: ', argv);

if(command === 'add'){
	
	newNote = notes.addNewNote(argv.title,argv.body);
	newNote[newNote.length-1].title === argv.title ? `note successfully added` : `note can't be added`;

}else if (command === 'remove'){

	notes.removeNote(argv.title);

}else if(command === 'read'){

	notes.getNote(argv.title);

}
else if(command === 'read'){

	notes.removeNote(argv.title);

}else if(command === 'list'){

	notes.getAll();

}else{
	// console.log(`learn how to throw an exception`);
	console.log(`command not recognised`);
};



// console.log('process',process.argv);
// console.log(argv}\n`);


// // process.argv.forEach((value, index) => {
// // 	console.log(`key: ${index}, value: ${value}\n`);
// // });

