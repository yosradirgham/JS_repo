// // var obj = {
// // 	fistrname : 'yosra',
// // 	lastname: 'dirgham',
// // 	age : 23
// // };

// // var stringObj = JSON.stringify(obj);

// // console.log(typeof(stringObj));

// var person = '{"fistrname": "yosra","age": 23}';
// console.log(`person: ${person}`);

// var personObj = JSON.parse(person);
// console.log(`personObj`,personObj);

const fs = require('fs');

var originalNote = {
	title: 'todo list',
	body : `that's my secret`
};

var stringNote = JSON.stringify(originalNote);

fs.writeFileSync('note.json',stringNote, () => {
	console.log('hey there');
});

var file = fs.readFileSync('./note.json');
var note = JSON.parse(file);


console.log(typeof(file));
console.log(file.title);
console.log(JSON.parse(file));

// console.log(typeof(note));
// console.log(`file: ${note}`);