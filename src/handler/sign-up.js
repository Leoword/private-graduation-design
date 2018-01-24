'use strict';

const sequelize = require('../lib/database');
const User = sequelize.model('user');

module.exports = function signUp(req, res, next) {
	if (req.session.isAssign) {
		return;
	}

	if (!req.body.username || !req.body.password) {
		req.session.state = false;

		res.status(404).json({
			method: 'post',
			information: 'fail'
		});
		return;
	}

	User.create({
		username: req.body.username,
		password: req.body.password
	});

	req.session.isAssign = true;
};