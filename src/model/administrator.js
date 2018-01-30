const sequelize = require('../lib/database');
const Sequelize = require('sequelize');


const Administrator = sequelize.define('administrator', {
	name: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	password: {
		type: Sequelize.STRING
	}
});
Administrator.sync({force: true});