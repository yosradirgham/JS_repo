console.log('----------------------------starting node.js----------------------------');

const geoModule = require('./geoModule.js');
const weatherModule = require('./weather.js');

const yargs = require('yargs');

let argv = yargs
	.options({
		a:{
			describe : 'address to fetch weather for',
			demand: true,
			string:true,
			alias:'address'
		}
	})
	.help()
	.argv;


geoModule.getGeoCode(argv.a)
.then(message =>{
	console.log('the message: ',message);
	return weatherModule.getWeather(message.latitude, message.longitude);
})
.then(msg => {
	console.log(msg);
})
.catch(error =>{
	console.log(error);
})
