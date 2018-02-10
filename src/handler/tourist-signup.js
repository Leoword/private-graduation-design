'use strict';

const sequelize = require('../lib/database');
const Tourist = sequelize.model('tourist');
const validate = require('../lib/validate');
const {throwError} = require('error-standardize');

module.exports = function touristSignUp(req, res, next) {

	if (!validate('tourist', req.body)) {
		throwError(new Error('your input is ignore!'), 300);

		return;
	}
	
	Tourist.findOne({
		where: {
			touristName: req.body.username
		}
	}).then(tourist => {
		if (tourist !== null) {
			return res.json({
				information: '用户名已存在，请选择其他用户名！'
			});
		}
	});

	Tourist.create({
		touristName: req.body.username,
		password: req.body.password,
		email: req.body.email,
		address: req.body.address
	}).then(() => {

		res.status(200).json({
			information: '注册成功！',
			isJump: true,
			type: 'tourist'
		});
	});
};