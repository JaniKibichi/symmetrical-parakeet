'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var config = require(__dirname + './../config/config');

//connect
var sequelize = new Sequelize(config.MySQL.db, config.MySQL.user, config.MySQL.pass,
	{host: config.MySQL.host, dialect: 'mysql', autoincrement: true });

var db        = {};

fs
  .readdirsync(__dirname)
  .filter(function(file){
  	return (file.indexOf('.')!==0)&&(file !=='index.js');
  })
  forEach(function(file){
  	var model = sequelize.import(path.join(__dirname, file));
  	db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName){
	if ('associate' in db[modelName]){
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
module.exports = db;