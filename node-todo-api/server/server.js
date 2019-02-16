//Todo rest API

const express    = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// Middlewares configuration
app.use(bodyParser.json());

// Data manipulation
app.post('/todos',(req,res,err)=>{
  var todo = new Todo({
    text: req.body.text
  });

  // save our todo in our database
  todo.save()
  .then(doc => console.log(`document added to database:\n${res.send(doc)}`))
  .catch(e => console.log(`Unable to add todo:\n${res.status(400).send(e)}`));
});

app.post('/users',(req,res,err)=>{

});


app.listen(3000,()=>{
  console.log('Started on port 3000');
});

module.exports.app = app;
