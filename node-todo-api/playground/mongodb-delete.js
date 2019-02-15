const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

  if(err) return console.log('Unable to connect to sserver');
  console.log('Connected to server');

  const db = client.db('TodoApp');

  db.collection('Todos').deleteMany({
    completed:true
  }).then(result => console.log(result));

  db.collection('Todos').deleteOne({
    completed : false
  }).then(result => console.log(result));

  db.collection('Todos').findOneAndDelete({
    completed:false
  }).then(res => console.log(res));

  client.close();

});
