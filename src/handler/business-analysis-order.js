'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Production = sequelize.model('production');

module.exports = function businessAnalysisOrder(req, res, next) {
	if (!req.session.state  || req.session.type !== 'business') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}
	
	Production.findAll({
		attributes: ['type', [Sequelize.fn('SUM', Sequelize.col('saleNumber')), 'number']],
		group:'type',
		where: {
			businessName: req.session.name
		}
	}).then(sale => {
		Production.findAll({
			attributes: ['productionName','saleNumber'],
			where: {
				businessName: req.session.name
			}
		}).then(production => {
			res.status(200).json({
				sale: sale,
				production: production
			});
		});
	});
}