'use strict';

const sequelize = require('../lib/database');
const Order = sequelize.model('order');
const Production = sequelize.model('production');

module.exports = function addOrder(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有进行登录(必须是游客身份登录)！'
		});

		return;
	}

	Order.create({
		touristName: req.session.name,
		productionName: req.body.productionName,
		productionNumber: req.body.productionNumber
	}).then(order => {
		Production.findOne({
			where: {
				productionName: order.productionName
			}
		}).then(production => {
			production.increment('saleNumber').then(production => {
				res.status(200).json({
					information: '下订单成功！'
				});
			});
		});
	});
};