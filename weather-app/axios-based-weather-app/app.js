console.log('-----------------starting app.js------------------');

const yargs = require('yargs');
const axios = require('axios');

let argv = yargs
	.options({
		address:{
			describe:'the address to fetch weather for',
			demand : true,
			alias : 'a',
			string:true
		}
	})
	.help()
	.argv;

let address = encodeURIComponent(argv.address);
let urlAddress = `https://www.mapquestapi.com/geocoding/v1/address?key=t03TO3DxpLha3AsloihHft3Pj2Aylkf5&location=${address}`;

axios.get(urlAddress)
	.then(response => {
		if(response.status !== 200)	throw new Error('Unable to find that address lol');
	
		let latitude = response.data.results[0].locations[0].latLng.lat;
		let longitude = response.data.results[0].locations[0].latLng.lng;
		let urlWeather = `https://api.darksky.net/forecast/5c3e5f7558451d60d503027352a124f9/${latitude},${longitude}`;
	
		return axios.get(urlWeather);
	})
	.then(response => {
		if(response.status !== 200) throw new Error('unable to fetch wethear');
		else	console.log(`It's currently ${response.data.currently.temperature} in ${argv.a}, it feels like:${response.data.currently.apparentTemperature}`);
	})
	.catch( e => {
		if(e.code === 'ENOTFOUND') console.log('unable to connect to API servers'); // cannot even get connected to the server, the get http metho has failed 
		else console.log(e.message); // connected to the server, but canot get data	
	});
