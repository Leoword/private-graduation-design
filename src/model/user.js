const sequelize = require('../lib/database');
const Sequelize = require('sequelize');


const User = sequelize.define('user', {
	username: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	}
});
User.sync({force: true});