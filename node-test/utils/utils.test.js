const utils = require('./utils.js');

const expect = require('expect');

it('should add two numbers',()=>{
	var res = utils.add(11,22);
	expect(res).toBe(33,'Sum correct').toBeA('number');
	// if(res != 33) throw Error('sum incorrect');
});

it('should square a number',()=>{
	var res = utils.square(16);
	expect(res).toBe(4).toBeA('number');
	// if(res != 4) throw Error('result not correct');
});

it('Should async square a number',(done)=>{
	utils.asyncSquare(2, square => {
		expect(square).toBe(4).toBeA('number');
		done();
	});
});

it('should check if our objects are equal',()=>{
	expect({firstname:'yosra'}).toInclude({firstname:'yosra'});
});

it('should set firstname and lastname',()=>{
	let user = {age:23, location:'54600 France'};
	var obj = utils.setName(user, 'yosra DIRGHAM');
	expect(obj).toInclude({firstname : 'yosra'});
	expect(obj).toInclude({lastname : 'DIRGHAM'});
});