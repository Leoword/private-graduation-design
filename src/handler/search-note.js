'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const TravelNote = sequelize.model('tranvelNote');
const Op = Sequelize.Op;

module.exports = function searchNote(req, res, next) {
	const search = `%${req.body.search}%`;

	TravelNote.findAll({
		where: {
			[Op.or]: [
				{
					title: {
						[Op.like]: search
					}
				},
				{
					content: {
						[Op.like]: search
					}
				},
				{
					type: {
						[Op.like]: search
					}
				}
			],
			state: '通过'
		}
	}).then(note => {
		res.status(200).json(note);
	});
};