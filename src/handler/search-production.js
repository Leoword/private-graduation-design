'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Production = sequelize.model('production');
const Op = Sequelize.Op;

module.exports = function searchProduction(req, res, next) {
	const search = `%${req.body.search}%`;

	Production.findAll({
		where: {
			[Op.or]: [
				{
					productionName: {
						[Op.like]: search
					}	
				},
				{
					describe: {
						[Op.like]: search
					}	
				},
				{
					price: {
						[Op.like]: search
					}	
				},
				{
					type: {
						[Op.like]: search
					}	
				},
				{
					destination: {
						[Op.like]: search
					}	
				},
			],
			state: '通过'
		}
	}).then(production => {
		console.log(production);

		res.status(200).json(production);
	});
};