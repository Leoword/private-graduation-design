'use strict';

const sequelize = require('../lib/database');
const Artical = sequelize.model('artical');

module.exports = function manageArtical(req, res, next) {
	if (!req.session.state  || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Artical.findAll().then(artical => {
		if (artical.length !== 0) {
			res.status(200).json(artical);
		} else {
			res.status(200).json({
				information: '你还没有发布任何文章！'
			});
		}
	});
}