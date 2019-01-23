// fetch a user from a database ...
var getUser = (userID, callback) => {
	
	var user = {
		id:userID,
		userName:'yosra'
	};

	setTimeout(()=>{
		callback(user);
	}, 3000);

	//callback(user);
};

getUser(1,(user)=>{
	//print the data we get from the server to the console, which in this case is 'user', after we passed into arguments of the function its id, we got back the data
	//corresponding to that id from the server voilà
	console.log(user);
});// the callback function in this case, is the function we'll run when the user data will come back to us <3


//PS: the setTimeout function is actually defined as follows:
// var setTimeout = (callback, delay);