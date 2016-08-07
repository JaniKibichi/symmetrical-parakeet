'use strict';

module.exports = function(sequelize, DataTypes){
  var SMS = sequelize.define('SMS', {
  	from: {
  		type: DataTypes.STRING,
  		allowNull: false
  	},
  	to: {
  		type: DataTypes.STRING
  	},
  	text: {
  		type: DataTypes.STRING
  	},
  	smsid: {
  		type: DataTypes.STRING
  	},
  	linkid: {
  		type: DataTypes.STRING
  	}
  });
  return SMS;
};