'use strict';

const sequelize = require('../lib/database');
const Tourist = sequelize.model('tourist');

module.exports = function updateTourist(req, res, next) {
	const { email, address } = req.body;

	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还未登录！'
		});

		return;
	}

	Tourist.update({
		email,
		address
	},
	{
		where: {
			touristName: req.session.name
		}
	}).then(tourist => {
		if (tourist !== null) {
			res.status(200).json({
				information: '修改成功！'
			});
		}
	});
}