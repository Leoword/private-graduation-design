'use strict';

const sequelize = require('../lib/database');
const Order = sequelize.model('order');
const Production = sequelize.model('production');

module.exports = function deleteOrder(req, res, next) {
	if (!req.session.state  || req.session.type === 'administrator') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}
	
	Order.findOne({
		where: {
			orderNumber: req.body.orders[0].orderNumber
		}
	}).then(order => {
		Production.findOne({
			where: {
				productionName: order.productionName
			}
		}).then(production => {
			production.decrement('saleNumber').then(production => {
				
				Order.destroy({
					where: {
						orderNumber: req.body.orders[0].orderNumber
					}
				}).then(order => {
					if (order !== 0) {
						res.status(200).json({
							prompt: '删除成功,请刷新！'
						});
					} else {
						res.status(200).json({
							prompt: '你还没有任何订单！'
						});
					}
				});
			});
		});
	})
}