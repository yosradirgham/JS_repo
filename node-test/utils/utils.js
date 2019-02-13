module.exports.add = (a,b)=> a+b;

module.exports.asyncAdd = (a,b,callback)=>{
	setTimeout(()=>{
		callback(a + b);
	},1500);
};

module.exports.square = (a)=> Math.sqrt(a);

module.exports.asyncSquare = (a,callback)=>{
	setTimeout(()=>{
		callback(a*a);
	},1500);
};

module.exports.setName = (user, fullName)=>{
	var nameArr = [];
	let i = 0;
	while(fullName[i] != ' ') ++i;

	nameArr.push(fullName.slice(0,i));
	nameArr.push(fullName.slice(i+1, fullName.length));

	user.firstname =  nameArr[0];
	user.lastname  =  nameArr[1];
		
	return user;
};

