'use strict';

//instantiate variables
var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT)
var db = require('./../models');

var voice = AfricasTalking.VOICE;
var sms = AfricasTalking.SMS;

//set up biometrics API instance
var TheVoice = require('VoiceIt');
TheVoice.initialize(options.Voiceit.VoiceitKey);

//assemble welcome sms
var welcomeTxt = "Thank you for chosing peer2peer. We will now record your voice.";
welcomeTxt += "To do this we will call you and request you to repeat a phrase";
welcomeTxt += "Our customer care number is +254711082899. Reply Ok";


exports.peerSMS = function(req, res){
//receive AT post
var from =  req.body.from;
var text =  req.body.text;

if (text.toLowerCase() === 'ok'){
	
//make a call to the user and record voice
voice.call({
	'callFrom': '+254711082899',
	'callTo' : from
})
.then(function(s){
	console.log(s);
})
.catch(function(error){
	console.log(error);
});
	
}else (text.toLowerCase()  === 'loan'){
	//check if user is already registered and ask for offer or bid
	db.Peer.findAll({ 
		where: {
			phoneNumber: from 
		}
	})
	.then(function(peer){
		console.log('Peer found: ', peer);
		//ask for bid
	})
	.catch(function(error){
		console.log('Peer not found', error);
		// create user
		//create a new user with VoiceIT
			TheVoice.createUser({
				email: from+'@peer2peer.com',
				password: from+'d0CHipUXOk',
				firstName: from+'AT',
				lastName: from+'Dev',
				phone1: from,
				callback: function(response){
				//ADD CUSTOM CODE HERE TO USE 
				//DATA RECEIVED IN THE response VARIABLE
				console.log("The Server Responded with the JSON: ",response);
				}
			});

		//send alert for voice biometrics
			var opts = { 'to': from, 'message': welcomeTxt };
			sms.send(opts).then(function(s){
				console.log(s);
			})
			.catch(function(error){
				console.log(error);
			});

		//create peer pending other updates
		db.Peer.create({
			'phoneNumber': req.body.from
		})
		.then(function(peer){
			console.log('Peer created', peer);
		});

	});

}

//alert the gateway that the POST is received.
res.status(200);
res.send();


};