'use strict';

const sequelize = require('../lib/database');
const Production = sequelize.model('production');

module.exports = function manageProduction(req, res, next) {
	if (!req.session.state) {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Production.findAll({
		where: {
			businessName: req.session.name
		}
	}).then(note => {
		if (note.length !== 0) {
			res.status(200).json(note);
		} else {
			res.status(200).json({
				information: '你还没有发布任何商品！'
			});
		}
	});
}