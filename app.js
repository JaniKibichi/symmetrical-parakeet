'use strict';
//initialize app
var express = require('express');
var app = express();

//import routes
var index = require('./routes/index');
var peer = require('./routes/peer');
var sms = require('./routes/sms');
var stellar = require('./routes/stellar');
var voice = require('./routes/voice');

//pull in other dependencies
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');

//configure app
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//create the logs
var accessLogStream = fs.createWriteStream('/var/log/symmetrical-parakeet/' + 'app.log', { flags: 'a'});
app.use(logger('combined', { stream: accessLogStream, skip: function(req, res){ return res.statusCode < 400; } }));
app.use(logger('dev'));

//specify the port for running the application
var port = process.env.PORT || 8010;

//import the models into the app
var models = require('./models');

//routes
app.get('/', index.index);
app.post('/sms', sms.peerSMS);
app.post('/stellar', stellar.peerOffer);
app.get('/peer', peer.peerGet);
app.post('/peer', peer.peerSet);
app.post('/voice', voice.peerVoice);

models.sequelize.sync({logging: false}).then( function(){
	var server = app.listen(port, function(){ 
		console.log('Magic happens on port '+ server.address().port); 
	});
});

