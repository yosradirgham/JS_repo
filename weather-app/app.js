console.log('----------------------------starting node.js----------------------------');

const geoModule = require('./geoModule.js');

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

geoModule.geoCodeAddress(argv.a);