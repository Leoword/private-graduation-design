const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Business = sequelize.model('business');


const Production = sequelize.define('production', {
	productionNumber: {
		type: Sequelize.INTEGER(11).UNSIGNED,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	productionName: {
		type: Sequelize.STRING,
		unique: true,
		AllowNull: false
	},
	businessName: {
		type: Sequelize.STRING,
		references: {
			model: Business,
			key: 'businessName'
		}
	},
	describe: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.STRING,
		allowNull: false
	},
	type: {
		type: Sequelize.STRING,
		allowNull: false
	},
	image: {
		type: Sequelize.STRING,
		allowNull: false
	},
	collectNumber: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		defaultValue: 0
	},
	saleNumber: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		defaultValue: 0
	},
	destination: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: '待审核'
	}
});

Production.sync();