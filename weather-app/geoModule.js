console.log('----------------------------starting geoModule.js----------------------------');

const request = require('request');

var getGeoCode = (address) => {
 
 	address = encodeURIComponent(address);

	return new Promise((resolve, reject)=>{
	
		request({
		
			url : `https://www.mapquestapi.com/geocoding/v1/address?key=t03TO3DxpLha3AsloihHft3Pj2Aylkf5&location=${address}`
		
		},(error, response, body)=>{

			if(error) reject('unable to connect to the server');
			else if(response.statusCode === 400) reject('unable to fetch data');
			else if(!error && response.statusCode === 200){
				body = JSON.parse(body, undefined,2);
				resolve({
					address : body.results[0].providedLocation.location,
					latitude: body.results[0].locations[0].latLng.lat,
					longitude: body.results[0].locations[0].latLng.lng
				});	
			} 

		});
	});

};


module.exports = {
	getGeoCode
}