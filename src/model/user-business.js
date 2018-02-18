const sequelize = require('../lib/database');
const Sequelize = require('sequelize');


const Business = sequelize.define('business', {
	businessName: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	password: {
		type: Sequelize.STRING
	},
	realName: {
		type: Sequelize.STRING
	},
	id: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	}
});
Business.sync();