// Loading ObjectID
const {ObjectID} = require('mongodb');

// Getting our data structurs
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Connecting to the mongo database
const {mongoose} = require('./../server/db/mongoose');

// Specifying user
var id = '65c67d921bb67d504a15a7d66';

// Validating the Id
if(!ObjectID.isValid(id)) return console.log('Invalid user Id');

// Query the User collection
User.findById(id)
.then(doc => {
  if(!doc) return console.log('Unable to query data');
  console.log(doc);
});

// Query the todos collection
// Todo.find({_id:'5c6a69206f445b021b441cd1'})
// .then(todos => console.log(todos))
// .catch(err  => console.log(err));
//
// Todo.findOne({_id:'5c6a69206f445b021b441cd1'})
// .then(docs => console.log(docs))
// .catch(err => console.log(err));

Todo.findById('5c6a69206f445b021b441cd1')
.then(docs => {
  if(!docs) return console.log('Unable to query Id');
  console.log(`document:\n${docs}`);
}).catch((e)=> console.log(e));
