const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err) return console.log('Unable to connect to server');
  console.log('Connected to mongodb server');

  const db = client.db('TodoApp');

  db.collection('Todos').find({completed:true}).toArray()
  .then(docs => console.log(docs))
  .catch(err => console.log(err));


// Now we will query by _id
  db.collection('Todos').find({
    _id : new ObjectID('5c66781ca341890335feff73')
  }).toArray()
  .then(docs => console.log(docs))
  .catch(err => console.log(err));

  console.log('----count----');
  db.collection('Todos').find().count()
  .then(result => console.log(result))
  .catch(err => console.log(err));

  console.log('----count----');
  db.collection('Todos').find({completed:true}).count()
  .then(result => console.log(result));

  console.log('----count----');
  db.collection('Todos').find({completed:false}).count()
  .then(result => console.log(result));

  client.close();
});
