const {mongoose} = require('./../server/db/mongoose');

const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');


Todo.findByIdAndRemove('5c6a69206f445b021b441cd2').then(result => console.log(result));

// Todo.findOneAndRemove({_id:.... , att2:.....})
// Todo.findByIdAndRemove(id)
// Todo.remove({})
