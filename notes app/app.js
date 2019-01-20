console.log('-------------------starting app.js------------------');


//random ideas
//what can u do to improve yr day?
//vote ...
//measure performance <3


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
		console.log('note does not exist');
	}

}else if(command === 'remove'){

	notes.removeNote(argv.title);

}else if(command === 'list'){

	notes.getNotes();

}else{

	console.log('command not found');

}

