const request = require('supertest');

const expect = require('expect');

var app = require('./server.js').app;

describe('Server',()=>{
	
	describe('#Get /',()=>{
		it('Should send respond from /',(done) => {
			request(app)
			.get('/')
			.expect(200)
			.expect('<p>Hello world, my name is yosra <3, I love coding, and I am really making a great progress right here <3</p>')
			.end(done);
		});		
	});


	describe('#Get /about',()=>{
		it('Should return response for /about route',(done)=>{
			request(app)
			.get('/about')
			.expect(200)
			.expect((res)=>{
				expect(res.body).toInclude({users:[{firstname:'yosra',age:23},{firstname:'andrew',age:25},{firstname:'<3',age:25}]});
			})
			.end(done);
		});		
	});

});
