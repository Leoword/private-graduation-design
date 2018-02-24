'use strict';

const sequelize = require('../lib/database');
const Business = sequelize.model('business');

module.exports = function manageBusiness(req, res, next) {
	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Business.findAll().then(business => {
		if (business.length !== 0) {
			res.status(200).json(business);
		} else {
			res.status(200).json({
				information: '现在没有任何商户！'
			});
		}
	});
}