//API key : 5c3e5f7558451d60d503027352a124f9
console.log('----------------------------starting weather.js----------------------------');

const request = require('request');

var getWeather = (latitude, longitude, callback)=> {
	request({
		url :`https://api.darksky.net/forecast/5c3e5f7558451d60d503027352a124f9/${latitude},${longitude}`
	}, (error, response, body)=>{
		if(error) callback('unable to connect to the server', undefined);
		if(response.statusCode === 400) console.log('unable to fetch weather');
		else if(!error && response.statusCode === 200){
			body = JSON.parse(body);
			callback(undefined,{
				weather : body.currently.summary,
				temperature : body.currently.temperature,
				//the catual temperature
				actualTemp : body.currently.apparentTemperature
			});		
		}
	});
};


module.exports= {
	getWeather
}