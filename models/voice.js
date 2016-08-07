'use strict';
module.exports = function(sequelize, DataTypes){
	var Voice = sequelize.define('Voice',{
durationInSeconds: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING
    },
    amount: {
     type: DataTypes.STRING
    },
    callerNumber: {
      type: DataTypes.STRING
    },
    destinationNumber: {
     type: DataTypes.STRING
    },
    sessionId: {
      type: DataTypes.STRING
    },
    callStartTime: {
      type: DataTypes.STRING
    },
    isActive: {
      type: DataTypes.STRING
    },
    currencyCode: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    recordingUrl: {
      type: DataTypes.STRING
    }
	});
	return Voice;
};

