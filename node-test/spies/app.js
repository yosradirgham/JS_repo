// app.js is used for testing

const db = require('./db.js');

module.exports.signUp = (email,password)=>{

	// Check if the email already exists


	// Save the user to the database
	db.saveUser({
		email,
		password
	});

	// Send a welcome email
};
