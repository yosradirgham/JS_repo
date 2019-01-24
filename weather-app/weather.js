//API key : 5c3e5f7558451d60d503027352a124f9
console.log('----------------------------starting weather.js----------------------------');

const request = require('request');

var getWeather = (lattitude, longitude, callback)=> {
	request({
		url :'https://api.darksky.net/forecast/5c3e5f7558451d60d503027352a124f9/39.944267,-75.163609'
	}, (error, response, body)=>{
		if(error) callback('cannot connect to the forecast server', undefined);
		else{
			body = JSON.parse(body);
			callback(undefined,{
				weather : body.currently.summary
			});		
		}
	});
};


module.exports = {
	getWeather
}