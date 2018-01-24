'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', '123456', {
	host: '127.0.0.1',
	dialect: 'mysql',
	pool: {
		max: 0,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;