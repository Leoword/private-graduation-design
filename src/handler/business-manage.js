'use strict';

const sequelize = require('../lib/database');
const Business = sequelize.model('business');

module.exports = function businessInformation(req, res, next) {
	if (!req.session.state) {
		res.status(200).json({
			information: '你还没有进行登录!'
		});

		return;
	}

	Business.findOne({
		where: {
			businessName: req.session.name
		}
	}).then(business => {
		res.status(200).json(business);
	});
};