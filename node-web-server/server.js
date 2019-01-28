console.log('------------------starting server.js------------------');

const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req, res) => {
	res.send({
		firstname:'yosra',
		age: 23,
	});
});

app.get('/about',(req, res) => {
	res.send(`lol`);
})

app.get('/about/What',(req, res) => {
	res.send(`Hey`);
});


app.listen(3000);
