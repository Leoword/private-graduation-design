'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Tourist = sequelize.model('tourist');
const Topic = sequelize.model('topic');

const Comment = sequelize.define('comment', {
	commentNumber: {
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
	topicNumber: {
		type: Sequelize.INTEGER(11).UNSIGNED,
		allowNull: false,
		references: {
			model: Topic,
			key: 'topicNumber'
		}
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

Comment.sync();