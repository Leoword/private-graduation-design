'use strict';

const sequelize = require('../lib/database');
const Tourist = sequelize.model('tourist');
const Business = sequelize.model('business');
const Administrator = sequelize.model('administrator');
const {throwError} = require('error-standardize');
const validate = require('../lib/validate');

module.exports = function signIn(req, res, next) {
	if (req.session.state) {
		return res.json({
			information: '你已经登录！'
		});
	}

	if (!validate('signin', req.body)) {
		throwError(new Error('your username or password is ignore!'), 300);

		return;
	}
	switch (req.body.type) {
	case 'tourist':
		Tourist.findOne({
			where: {
				touristName: req.body.username,
				password: req.body.password
			}
		}).then(tourist => {
			if (tourist !== null) {
				req.session.state = true;
				res.status(200).json({
					information: '登录成功！',
					isJump: true,
					type: 'tourist'
				});
			} else {
				res.json({
					information: '用户名或密码错误！'
				});
			}
		});

		break;
	case 'business':
		Business.findOne({
			where: {
				businessName: req.body.username,
				password: req.body.password
			}
		}).then(business => {
			if (business !== null) {
				req.session.state = true;
				res.status(200).json({
					information: '登录成功！',
					isJump: true,
					type: 'business'
				});
			} else {
				res.json({
					information: '用户名或密码错误！'
				});
			}
		});

		break;
	case 'administrator':
		Administrator.findOne({
			where: {
				name: req.body.username,
				password: req.body.password
			}
		}).then(administrator => {
			if (administrator !== null) {
				req.session.state = true;
				res.status(200).json({
					information: '登录成功！',
					isJump: true,
					type: 'administrator'
				});
			} else {
				res.json({
					information: '用户名或密码错误！'
				});
			}
		});

		break;
	default:
		throwError(new Error('no suitable type'), 500);
		
	}

};