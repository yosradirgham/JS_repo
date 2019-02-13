const express = require('express');

var app = express();

app.get('/',(req,res,err)=>{
	res.send('<p>Hello world, my name is yosra <3, I love coding, and I am really making a great progress right here <3</p>');
});

app.get('/about',(req,res,err)=>{
	res.status(200).send({
		users:[{firstname:'yosra',age:23},{firstname:'andrew',age:25},{firstname:'<3',age:25}]
	});
	// console.log(res);
});

app.listen(3000,()=>{
	console.log('server listening to port 3000');
});

module.exports.app = app;