'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Production = sequelize.model('production');

module.exports = function businessAnalysisCollection(req, res, next) {
	if (!req.session.state  || req.session.type !== 'business') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Production.findAll({
		attributes: ['type', [Sequelize.fn('SUM', Sequelize.col('collectNumber')), 'number']],
		group:'type',
		where: {
			businessName: req.session.name
		}
	}).then(collection => {
		Production.findAll({
			attributes: ['productionName','collectNumber'],
			where: {
				businessName: req.session.name
			}
		}).then(production => {
			res.status(200).json({
				collection: collection,
				production: production
			});
		});
		
	});
}