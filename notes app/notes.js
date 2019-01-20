console.log('----------------------starting notes.js-----------------------');

const fs = require('fs');

var addNote = (title, body) => {
	let notes = [],noteStringified, noteParsed, noteExistsArr =[];

	// 1. fetch existing notes
	try{
		notes = JSON.parse(fs.readFileSync('./notes.json'));
	}catch(err){
		console.log(err);
	}

	// 2. Create a note data structure that will hold the note
	let note = {
		title,
		body
	};

	// 3. store the note in a note array if the title does not already exist 
	noteExistsArr = notes.filter(x => x.title === title);
	noteExistsArr.length === 0 ? notes.push(note) : 'note already exists' ;

	// 4. store the note inside of a json file
	noteStringified = JSON.stringify(notes);
	fs.writeFileSync('./notes.json',noteStringified);

};

var readNote = () => {};

var removeNote = () => {};

var listNotes = () => {};



module.exports = {
	addNote,
	readNote,
	removeNote,
	listNotes
};
