const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text:{
    type      : String,
    required  : true,
    minlength : 1,
    trim      : true
  },
  completed:{
    type    : Boolean,
    default : false
  },
  completedAt:{
    type    : Number,
    default : null
  }
});

var User = mongoose.model('User',{
  name:{
    type:String,
  },
  age:{
    type:Number
  },
  location:{
    type:String
  },
  email:{
    type: String,
    require: true,
    trim:true
  }
});

var newTodo = new Todo({
  text:'   Finish this course   '
});

var newUser = new User({
  email:'yosra@example.com'
});

newTodo.save()
.then(doc => console.log(doc))
.catch(e => console.log(e));

newUser.save()
.then(doc => console.log(`user saved:\n${doc}`))
.catch(e => console.log(`Unable to save user:\n${e}`));
