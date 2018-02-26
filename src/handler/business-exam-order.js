'use strict';

const sequelize = require('../lib/database');
const Order = sequelize.model('order');

module.exports = function passOrder(req, res, next) {
	const { state, orders } = req.body;

	if (!req.session.state || req.session.type !== 'business') {
		res.status(200).json({
			information: '你还未登录！'
		});

		return;
	}

	Order.update({
		state
	},
	{
		where: {
			orderNumber: orders[0].orderNumber
		}
	}).then(order => {
		if (order !== null) {
			res.status(200).json({
				information: '修改成功！'
			});
		}
	});
}