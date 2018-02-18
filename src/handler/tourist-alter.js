'use strict';

const sequelize = require('../lib/database');
const Tourist = sequelize.model('tourist');

module.exports = function alterTouristPassowrd(req, res, next) {
	const { old, password } = req.body;

	if (!req.session.state) {
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
		if (tourist.password !== old) {
			res.status(200).json({
				information: '原密码输入不正确!'
			});

			return;
		}

		
	Tourist.update({
		password
	},
	{
		where: {
			touristName: req.session.name
		}
	}).then(tourist => {
			if (tourist !== null) {
				res.status(200).json({
					information: '密码修改成功!'
				});
			}
		});
	});
};
