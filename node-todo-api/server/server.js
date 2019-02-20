//Todo rest API
const express    = require('express');
const bodyParser = require('body-parser');
const _          = require('lodash');
const {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
var port = process.env.PORT || 3000;

// Middlewares configuration
app.use(bodyParser.json());

// Data manipulation
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save()
  .then(doc => res.send(doc))
  .catch(e => res.status(400).send(e));
});


app.get('/todos',(req,res,err)=>{
  Todo.find({})
  .then(todos => res.send(todos))
  .catch(error => console.log(error));
});


app.get('/todos/:id',(req,res)=>{
  let id=req.params.id;
  if(!ObjectID.isValid(id)) return res.status(404).send('<h1>404 - Resource Not Found</h1>');
  Todo.findById(id)
  .then(doc => {
    if(!doc) return res.status(404).send('<h1>404 - Resource Not Found</h1>')
    res.send({doc});
  }).catch(err => res.status(400).send('<h1>400 - Unable To Query URL</h1>'));
});


app.delete('/todos/:id',(req,res)=>{
  let id = req.params.id;
  if(!ObjectID.isValid(id)) return res.status(404).send('<h1>404 - Invalid Id</h1>');
  Todo.findByIdAndRemove(id)
  .then(doc => {
    if(!doc) return res.status(404).send('<h1>404 - document does not exist</h1>');
    res.status(200).send(doc);
  })
  .catch(e => res.status(400).send());
});


app.patch('/todos/:id',(req,res)=>{
  let id = req.params.id;
  let body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)) return res.send(404).send('<h1>404 - Page Not Found</h1>');

  if(_.isBoolean(body.completed) && body.completed) body.completedAt = new Date().toString();
  else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true})
  .then(todo => {
    if(!todo) return res.status(404).send();
    res.status(200).send({todo})
  }).catch(e => res.status(400).send());
});


app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});

module.exports.app = app;
