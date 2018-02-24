'use strict';

const sequelize = require('../lib/database');
const Production = sequelize.model('production');

module.exports = function examProduction(req, res, next) {
	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Production.findAll({
		where: {
			state: '待审核'
		}
	}).then(production => {
		if (production.length !== 0) {
			res.status(200).json(production);
		} else {
			res.status(200).json({
				information: '现在没有任何商品供审核！'
			});
		}
	});
}