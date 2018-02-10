'use strict';

const sequelize = require('../lib/database');
const Business = sequelize.model('business');
const validate = require('../lib/validate');
const {throwError} = require('error-standardize');

module.exports = function businessSignUp(req, res, next) {

	if (!validate('business', req.body)) {
		throwError(new Error('your input is ignore!'), 300);

		return;
	}

	Business.findOne({
		where: {
			businessName: req.body.username
		}
	}).then(business => {
		if (business !== null) {
			return res.json({
				information: '用户名已存在，请选择其他用户名！'
			});
		}
	});

	Business.create({
		businessName: req.body.username,
		password: req.body.password,
		realName:req.body.realname,
		id:req.body.id,
		email: req.body.email,
		address: req.body.address
	}).then(() => {

		res.status(200).json({
			information: '注册成功！',
			isJump: true,
			type: 'business'
		});
	});

};