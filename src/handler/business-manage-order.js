'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Order = sequelize.model('order');
const Production = sequelize.model('production');

module.exports = function businessOrder(req, res, next) {
	if (!req.session.state || req.session.type !== 'business') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}
	
	Production.findAll({
		include: [{
			model: Order,
			where: {
				businessName: req.session.name
			}
		}]
	}).then(production => {
		if (production.length !== 0) {
			res.status(200).json(production);
		} else {
			res.status(200).json({
				information: '你还没有任何订单！'
			});
		}
	});
}