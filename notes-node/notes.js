console.log(`-------------------------------------starting notes.js-------------------------------------`);

const fs = require('fs');


// fetch notes from json file
var fetchNote = (path) => {
	var notes = []; 
	try{
		notes = JSON.parse(fs.readFileSync(path));
	}catch(err){
		console.log('err: ',err);
	}
	return notes;
};


//save notes into json file
var saveNote = (file,arr) => {
	fs.writeFileSync(file,JSON.stringify(arr));	
};


// add a note into json file
var addNewNote = (title, body) => {
	var notes = [], duplicateArr;

	var note = {
		title,
		body
	};

	notes = fetchNote('./notes.json');

	duplicateArr = notes.filter(x => x.title === title);
	if(duplicateArr.length === 0) notes.push(note);

	saveNote('notes.json',notes);
	return notes; 
};


//remove note from list
var removeNote = (title) => {
	var notes = fetchNote('./notes.json');
	var n = notes.length;
	notes.forEach(x => {
		if(x.title === title){
			var index = notes.indexOf(x);
			notes.splice(index,1);
		}
	});
	saveNote('notes.json',notes);
	notes.length+1 === n? console.log(`note successfully removed`) : console.log(`Note not removed`) ;
};



// log a note
var logNote = (note) => {
	console.log('------');
	debugger;
	console.log(note.title);
	console.log(note.body);
};



//get One specific note
var getNote = (title) => {
	//fetch notes
	var notes = fetchNote('./notes.json');

	//filter notes

	var note = notes.filter(x => x.title === title);

	/*var index = notes.forEach(x => { 
		if(x.title === title) return notes.indexOf(x);
	});*/

	//console.log the note we're looking for :)
	logNote(note[0]);
};

// get all notes
var getAll = () => {
	console.log('getting all the notes');
	var notes = fetchNote('./notes.json');
	notes.forEach(x => {
		console.log(`Note ${notes.indexOf(x)}:`);
		logNote(x);
	});
};



module.exports = {
	addNewNote,
	getAll,
	removeNote,
	getNote
};