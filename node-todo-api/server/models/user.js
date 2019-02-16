const {mongoose} = require('../db/mongoose');

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

module.exports.User = User;
