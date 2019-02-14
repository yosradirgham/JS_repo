const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app'); 

describe('App',()=>{

	var db={
		saveUser : expect.createSpy()
	};

	app.__set__('db',db);

	it('Should call the spy correctly',()=>{

		var spy = expect.createSpy();

		spy('yosra',23);

		//3. we can set up a series of assertions using expect.spies assertions
		expect(spy).toHaveBeenCalled();// To verify that spy was called
	    expect(spy).toHaveBeenCalledWith('yosra',23);// to verify that spy was called with some specific arguments
	});

	it('Sould call saveUser with user object',()=>{
		var email = 'yosra@example.com';
		var password = 123;

		app.signUp(email,password);

		expect(db.saveUser).toHaveBeenCalledWith({email,password});
	});

});
