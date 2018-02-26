'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Administrator = sequelize.model('administrator');

const Artical = sequelize.define('artical', {
	articalNumber: {
		type: Sequelize.INTEGER(11).UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false
	},
	type: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

Administrator.hasMany(Artical, {
	foreignKey: 'administrator'
});

Artical.sync();