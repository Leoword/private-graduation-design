'use strict';

const sequelize = require('../lib/database');
const Production = sequelize.model('production');

module.exports = function passProduction(req, res, next) {
	const { state, productionNumber } = req.body;

	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还未登录！'
		});

		return;
	}

	Production.update({
		state
	},
	{
		where: {
			productionNumber: productionNumber
		}
	}).then(production => {
		if (production !== null) {
			res.status(200).json({
				information: '修改成功！'
			});
		}
	});
}