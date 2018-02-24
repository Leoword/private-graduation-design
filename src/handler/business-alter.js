'use strict';

const sequelize = require('../lib/database');
const Business = sequelize.model('business');

module.exports = function alterBusinessPassowrd(req, res, next) {
	const { old, password } = req.body;

	if (!req.session.state || req.session.type !== 'business') {
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
		if (business.password !== old) {
			res.status(200).json({
				information: '原密码输入不正确!'
			});

			return;
		}

		
	Business.update({
		password
	},
	{
		where: {
			businessName: req.session.name
		}
	}).then(business => {
			if (business !== null) {
				res.status(200).json({
					information: '密码修改成功!'
				});
			}
		});
	});
};
