'use strict';

const sequelize = require('../lib/database');
const Production = sequelize.model('production');

module.exports = function getAllProduction(req, res, next) {
	if (req.body.typeValue === ''|| req.body.typeValue === undefined) {
		Production.findAll({
			where: {
				state: '通过'
			}
		}).then(production => {
			if (production.length !== 0) {
				res.status(200).json(production);
			}
		});
	} else {
		Production.findAll({
			where: {
				type: req.body.typeValue,
				state: '通过'
			}
		}).then(production => {
			res.status(200).json(production);
		});
	}
};