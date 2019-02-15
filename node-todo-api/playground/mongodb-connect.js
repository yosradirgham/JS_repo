const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

	if(err) return console.log('Unable to connect to mongodb server');
	console.log('Connected to mongodb server');

	const db = client.db('TodoApp');//Todos is a collection

	//	Todos collection
	db.collection('Todos').insertOne(({
		text:'Something to do',
		completed : false
	}),(err,result)=>{

		if(err) return console.log(`Unable to insert new doc in Todos collection:\n${err}`);

		console.log(result.ops);

	});

	//	Users collection
	db.collection('Users').insertOne(({

		name : 'yosra D',
		age:23,
		location:54600

	}),(err,result)=>{
			if(err) return console.log(`Unable to insert new document inside of Users collection:\n${err}`);
			console.log(result.ops);
	});

	client.close();
});
