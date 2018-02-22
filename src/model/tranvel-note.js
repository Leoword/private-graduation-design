'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Tourist = sequelize.model('tourist');

const TranvelNote = sequelize.define('tranvelNote', {
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
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: '待审核'
	}
});

TranvelNote.sync({force: true});