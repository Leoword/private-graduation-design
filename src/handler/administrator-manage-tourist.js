'use strict';

const sequelize = require('../lib/database');
const Tourist = sequelize.model('tourist');

module.exports = function manageTourist(req, res, next) {
	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Tourist.findAll().then(tourist => {
		if (tourist.length !== 0) {
			res.status(200).json(tourist);
		} else {
			res.status(200).json({
				information: '现在没有任何商户！'
			});
		}
	});
}