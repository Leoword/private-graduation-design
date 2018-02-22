const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Production = sequelize.model('production');
const Tourist = sequelize.model('tourist');

const Order = sequelize.define('order', {
	orderNumber: {
		type: Sequelize.INTEGER(11).UNSIGNED,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	touristName: {
		type: Sequelize.STRING,
		references: {
			model: Tourist,
			key: 'touristName'
		}
	},
	productionName: {
		type: Sequelize.STRING,
		references: {
			model: Production,
			key: 'productionName'
		}
	},
	productionNumber: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		defaultValue: 1
	}
});

Order.sync();