console.log('-------------------starting app.js------------------');

// node files
const notes = require('./notes.js');

// node modules
const argv  = require('yargs') //parses process.argv which will fetch arguments we pass in command line 
			.argv;

// variables
const command = argv._[0];
let note;


//MVP
// Add note
// Read note
// Remove note
// List notes

if(command === 'add'){

	notes.addNote(argv.title, argv.body);

}else if(command === 'read'){

	note = notes.readNote(argv.title);
	try{
		notes.displayNote(note);
	}catch(err){
		console.log('not does not exist');
	}

}else if(command === 'remove'){

	console.log('remove a note');

}else if(command === 'list'){

	console.log('list all notes');

}else{

	console.log('command not found');

}

