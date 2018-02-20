'use strict';

const sequelize = require('../lib/database');
const Business = sequelize.model('business');

module.exports = function updateBusiness(req, res, next) {
	const { email, address } = req.body;

	if (!req.session.state) {
		res.status(200).json({
			information: '你还未登录！'
		});
	}

	Business.update({
		email,
		address
	},
	{
		where: {
			businessName: req.session.name
		}
	}).then(business => {
		if (business !== null) {
			res.status(200).json({
				information: '修改成功！'
			});
		}
	});
}