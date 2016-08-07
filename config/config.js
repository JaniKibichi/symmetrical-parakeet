'use strict';

var options = {
	//configure the options for AT, MySQL, Stellar, Voice
	AT: {
		username : 'WeloveNerds',
		apiKey   : 'c3a9669275cb6b14230a6b610f64e387c726b05ec5d1b20f7910b824184cc405',
		format   : 'json'
	},

	MySQL: {
		port: '3306',
		host: 'localhost',
		db  : 'stellarvoice',
		user: 'root',
		pass: ''
	},

	Redis : {
		port : '6379',
		host : 'localhost'
	},

	Stellar: {
		sourceAccountId : 'GCK54HA7P5SGMLM5Y5ODULBAGDCQVT7IOWFNR7MD2GE7MRJLVJ2FQWYU',
		sourceSeed       : 'SBOWQOQ3DFJZTAEPMSBHVZC7IUNFUDHU7X5G2GWUQHGUFHQKTUCS47HX'
	},

	Voiceit: {
		voiceitKey : '8ab538ce24794b96b1daafd427c388a3'
	}
	    
};

module.exports = options;