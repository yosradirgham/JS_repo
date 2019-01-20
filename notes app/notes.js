console.log('----------------------starting notes.js-----------------------');

const fs = require('fs');

var displayNote = (note) => {
	console.log('----');
	console.log(note.title);
	console.log(note.body);
};

var readJasonFile = () => {
	let notes = [];
	try{
		notes = JSON.parse(fs.readFileSync('./notes.json'));
	}catch(err){
		console.log(err);
		console.log('file does not exist');
	}
	return notes;
};

var addNote = (title, body) => {
	let notes ,noteStringified, noteParsed, noteExistsArr =[];

	// 1. fetch existing notes
		notes = readJasonFile();
	// 2. Create a note data structure that will hold the note
	let note = {
		title,
		body
	};

	// 3. store the note in a notes array if the title does not already exist 
	noteExistsArr = notes.filter(x => x.title === title);
	noteExistsArr.length === 0 ? notes.push(note) : 'note already exists' ;

	// 4. store the note inside of a json file
	noteStringified = JSON.stringify(notes);
	fs.writeFileSync('./notes.json',noteStringified);

};

var readNote = (title) => {
	let notes, note;
	notes = readJasonFile();
	note = notes.filter(x => x.title === title);
	debugger;
	if(note.length === 1 ){
		return note[0];
	} 
};

var removeNote = (title) => {
	let notes;
};

var listNotes = () => {};



module.exports = {
	addNote,
	readNote,
	removeNote,
	listNotes,
	displayNote
};
