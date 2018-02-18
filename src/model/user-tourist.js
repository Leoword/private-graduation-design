const sequelize = require('../lib/database');
const Sequelize = require('sequelize');


const Tourist = sequelize.define('tourist', {
	touristName: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	password: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	}
});
Tourist.sync();