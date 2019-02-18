//Todo rest API
const express    = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');

var app = express();

// Middlewares configuration
app.use(bodyParser.json());

// Data manipulation
app.post('/todos',(req,res,err)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save()
  .then(doc => console.log(`document added to database:\n${res.send(doc)}`))
  .catch(e => console.log(`Unable to add todo:\n${res.status(400).send(e)}`));
});

app.get('/todos',(req,res,err)=>{
  Todo.find({})
  .then(todos => res.send(todos))
  .catch(error => console.log(error));
});

app.get('/todos/:id',(req,res,err)=>{
  let _id=req.params.id;
  // if the URL is invalid then we'll have an 404 status code
  if(!ObjectID.isValid(_id)) return res.status(404).send('<h1>404 - Resource Not Found</h1>');
  //The urul format is valid
  Todo.findById(_id)
  .then(doc => {
    // if the URL format is valid but the id we inserted doesn't exist thend we'll still get an 404 status code
    if(!doc) return res.status(404).send('<h1>404 - Resource Not Found</h1>')
    res.send({doc});// this is equivalent to res.send({doc : doc}) in ES6
  }).catch(err => {
    // the url format is valid, everything is OKay but the then method hasn't succeded then we'll get an 400 status code
    res.status(400).send('<h1>400 - Unable To Query URL</h1>');
  });
});


app.listen(3000,()=>{
  console.log('Started on port 3000');
});

module.exports.app = app;
