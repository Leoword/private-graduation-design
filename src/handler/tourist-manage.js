'use strict';

const sequelize = require('../lib/database');
const Tourist = sequelize.model('tourist');

module.exports = function informationOverview(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有进行登录!'
		});

		return;
	}

	Tourist.findOne({
		where: {
			touristName: req.session.name
		}
	}).then(tourist => {
		res.status(200).json(tourist);
	});
};