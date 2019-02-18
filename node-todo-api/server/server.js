//Todo rest API
const express    = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');

var app = express();

var port = process.env.PORT || 3000;

// Middlewares configuration
app.use(bodyParser.json());

// Data manipulation
app.post('/todos',(req,res,err)=>{
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

app.get('/todos/:id',(req,res,err)=>{
  let _id=req.params.id;

  if(!ObjectID.isValid(_id)) return res.status(404).send('<h1>404 - Resource Not Found</h1>');

  Todo.findById(_id)
  .then(doc => {
    if(!doc) return res.status(404).send('<h1>404 - Resource Not Found</h1>')
    res.send({doc});
  }).catch(err => {
    res.status(400).send('<h1>400 - Unable To Query URL</h1>');
  });
});


app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});

module.exports.app = app;
