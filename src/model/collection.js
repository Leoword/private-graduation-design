const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Production = sequelize.model('production');
const Tourist = sequelize.model('tourist');
const Business = sequelize.model('business');

const Collection = sequelize.define('collection', {
	collectionNumber: {
		type: Sequelize.INTEGER(11).UNSIGNED,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	}
});

Production.hasMany(Collection, {
	foreignKey: 'productionNumber'
});

Tourist.hasMany(Collection, {
	foreignKey: 'touristName'
});

Business.hasMany(Collection, {
	foreignKey: 'businessName'
});

Collection.sync();