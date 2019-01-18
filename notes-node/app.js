console.log(`-------------------------------------starting app.js-------------------------------------`);

const fs   = require('fs');
const _    = require('lodash');
const argv = require('yargs').argv;// pare command line arguments

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

}else if(command === 'getNote'){
	console.log('a fine');
	
	notes.getNote(argv[3]);

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

