console.log('----------------------------starting geoModule.js----------------------------');

const request = require('request');


var geoCodeAddress = (arg, callback) => {

	let address = encodeURIComponent(arg);
	request({
	
		url :`https://www.mapquestapi.com/geocoding/v1/address?key=t03TO3DxpLha3AsloihHft3Pj2Aylkf5&location=${address}`,
	
	},(error, response, body)=>{
		if(error){
	
			callback(`unable to connect to google's servers`, undefined);
	
		}else if(!error && response.statusCode === 200){
	
			body = JSON.parse(body, undefined, 2);
			callback(undefined, {
				latitude: body.results[0].locations[0].displayLatLng.lat,
				longitude: body.results[0].locations[0].displayLatLng.lng,
				status: response.statusCode	
			});			

		}else{
	
			console.log('unable to find that address');
	
		}
	});

}; 


module.exports={
	geoCodeAddress
}