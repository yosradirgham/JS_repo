console.log('----------------------------starting geoModule.js----------------------------');

const request = require('request');

var geoCodeAddress = (arg) => {

	let address = encodeURIComponent(arg);
	
	request({
	
		url :`https://www.questapi.com/geocoding/v1/address?key=t03TO3DxpLha3AsloihHft3Pj2Aylkf5&location=${address}`,
	
	},(error, response, body)=>{
		
		if(error){
	
			console.log(`unable to connect to google's servers`);
	
		}else if(response.statusCode === 200){
	
			body = JSON.parse(body, undefined, 2);
			console.log(`lattitude: ${body.results[0].locations[0].displayLatLng.lat}`);
			console.log(`longitude: ${body.results[0].locations[0].displayLatLng.lng}`);
			console.log('body.status: ', response.statusCode);
	
		}else{
	
			console.log('unable to find that address');
	
		}
	});

}; 


module.exports={
	geoCodeAddress
}