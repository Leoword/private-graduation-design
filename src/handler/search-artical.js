'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Artical = sequelize.model('artical');
const Op = Sequelize.Op;

module.exports = function searchArtical(req, res, next) {
	const search = `%${req.body.search}%`;

	Artical.findAll({
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
			]
		}
	}).then(artical => {
		res.status(200).json(artical);
	});
};