// var square = (x) => {
// 	return x*x;
// };

var square = x => x*x;
// we don't need to explicitly add return keyword when we use arrow functions without curly braces; it's implicitely provided for us

var Hi = {
	name : 'yosra',
	self = this;
	sayHi:()=>{
		console.log(`hi, i'm ${this.name}`);
	}
};

//console.log(square(9));
Hi.sayHi();