const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

  if(err) return console.log('Unable to connect to server');
  console.log('Connected to mongodb server');

  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('5c6686a8af692b059c5660c0')
  },{
    $set:{_id:1}
  },{
    returnOriginal : false
  }).then(result=> console.log(result));

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5c664ccdd44c7905326bbb9e')
  },{
    $set :{
      name : 'Meryl'
    },
    $inc:{
      age : 1
    }

  },{
    returnOriginal : false
  }).then(result => console.log(result));

  client.close();
});
