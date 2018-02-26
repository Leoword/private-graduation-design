const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Production = sequelize.model('production');
const Tourist = sequelize.model('tourist');
const Business = sequelize.model('business');

const Order = sequelize.define('order', {
	orderNumber: {
		type: Sequelize.INTEGER(11).UNSIGNED,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	productionName: {
		type: Sequelize.STRING,
		allowNull: false
		
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: '待处理'
	}
});

Production.hasMany(Order, {
	foreignKey: 'productionNumber'
});

Tourist.hasMany(Order, {
	foreignKey: 'touristName'
});

Business.hasMany(Order, {
	foreignKey: 'businessName'
});

Order.sync();