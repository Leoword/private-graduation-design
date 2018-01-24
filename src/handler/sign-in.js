'use strict';

const sequelize = require('../lib/database');
const User = sequelize.model('user');

module.exports = function signIn(req, res, next) {
	if (req.session.state) {
		return res.json({
			information: 'you have been logined'
		});
	}

	if (!req.body.username || !req.body.password) {
		req.session.state = false;

		res.status(404).json({
			method: 'post',
			information: 'fail'
		});
		return;
	}

	User.findOne({
		where: {
			username: req.body.username,
			password: req.body.password
		}
	}).then(user => {
		req.session.state = true;
		res.status(200).json({
			method: 'post',
			information: 'successed'
		});
	});

};