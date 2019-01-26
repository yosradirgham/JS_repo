console.log('----------------------------starting weather.js----------------------------');

const request = require('request');

var getWeather = (latitude, longitude)=>{
	return new Promise((resolve, reject)=>{
		
		request({

			url:`https://api.darksky.net/forecast/5c3e5f7558451d60d503027352a124f9/${latitude},${longitude}`

		},(error, response, body)=>{

			if(error) reject('unable to connect to the server');
			else if(response.statusCode === 400) reject('unable to fetch data');
			else if(!error && response.statusCode === 200){
				body = JSON.parse(body, undefined, 2);
				resolve({
					temperature:body.currently.temperature,
					actualTemperature:body.currently.apparentTemperature
				});
			}
		});
	});
};


module.exports= {
	getWeather
}