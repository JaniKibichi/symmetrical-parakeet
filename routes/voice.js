'use strict';
//instantiate variables
var options = require('../config/config');
var AfricasTalking = require('africaslking')(options.AT);
var db = require('./../models');

//set up biometrics API instance
var TheVoice = require('VoiceIt');
TheVoice.initialize(options.Voiceit.VoiceitKey);

exports.peerVoice = function(req,res){
	var isActive = req.body.isActive;

if(isActive === '1'){
  //check first if peer is a new caller

 //define record action for the call
     console.log(req.body);

      var response ='<?xml version="1.0" encoding="UTF-8"?>';
      response +='<Response>';
      response += '<Record finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true"/>';
      response += '<Say>Please say the sentence, I love my blue ball and yellow shoes, the beep.</Say>';
      response += '</Record>';
      response += '</Response>';

	  res.setHeader('Content-Type', 'text/plain');
	  res.send( response );

} else {
	var recordingUrl = req.body.recordingUrl;
	//send voice biometric sample, enroll user

	//store
}

  
  
};