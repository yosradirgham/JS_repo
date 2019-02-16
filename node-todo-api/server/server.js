const {mongoose} = require('./db/mongoose')

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const express = require('express');

// var newTodo = new Todo({
//   text:'   Finish this course   '
// });
//
// var newUser = new User({
//   email:'yosra@example.com'
// });
//
// newTodo.save()
// .then(doc => console.log(doc))
// .catch(e => console.log(e));
//
// newUser.save()
// .then(doc => console.log(`user saved:\n${doc}`))
// .catch(e => console.log(`Unable to save user:\n${e}`));
