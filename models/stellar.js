'use strict';

module.exports = function(sequelize, DataTypes){
	var Stellar = sequelize.define('Stellar',{
    transactionLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pagingToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    balance: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
	});
	return Stellar;
};

transactionLink
pagingToken
balance
