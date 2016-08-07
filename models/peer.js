'use strict';

module.exports = function(sequelize, DataTypes){
	var Peer = sequelize.define('Peer',{
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false
		},
		receiverAccountId: {
			type: DataTypes.STRING
		},
		receiverSeed: {
			type: DataTypes.STRING
		},
		recordingUrl: {
            type: DataTypes.STRING
       }
	});
	return Peer;
};