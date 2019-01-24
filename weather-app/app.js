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

//address is the second arg in argv: argv.a

geoModule.geoCodeAddress(argv.a, (errorMessage, results) => {
	if(errorMessage) console.log(errorMessage);
	else console.log(results);
});

weatherModule.getWeather(undefined, undefined,(errorMessage, results)=>{
	if(errorMessage) console.log(errorMessage);
	else console.log(results);
});