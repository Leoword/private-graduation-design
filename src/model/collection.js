const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Production = sequelize.model('production');
const Tourist = sequelize.model('tourist');

const Collection = sequelize.define('collection', {
	collectionNumber: {
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
	}
});

Production.hasMany(Collection, {
	foreignKey: 'productionNumber'
});

Collection.sync();