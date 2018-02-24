'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Tourist = sequelize.model('tourist');

const Topic = sequelize.define('topic', {
	topicNumber: {
		type: Sequelize.INTEGER(11).UNSIGNED,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	touristName: {
		type: Sequelize.STRING,
		allowNull: false,
		references: {
			model: Tourist,
			key: 'touristName'
		}
	},
	title: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false
	},
	type: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: '待审核'
	}
});

Topic.sync();