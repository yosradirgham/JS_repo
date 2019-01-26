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
	else{
		console.log(results);	
		weatherModule.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults)=>{
			if(errorMessage) console.log(errorMessage);
			else{
				console.log(weatherResults);		
				console.log(`It's currently ${weatherResults.temperature} \nIt feels like ${weatherResults.actualTemp}`);
			}
		});
	}
});
