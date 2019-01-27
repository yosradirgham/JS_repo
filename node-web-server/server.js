console.log('------------------starting server.js------------------');

const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req, res) => {
	res.send({
		firstname:'yosra',
		age: 23,
		job: 'lead tech at google <3'
	});
});

app.get('/about',(req, res) => {
	res.send(`hey yosra, you're doing a great job out there, keep up the hard work <3`);
})

app.get('/about/What',(req, res) => {
	res.send(`Hey, I love creating things`);
});


app.listen(3000);
