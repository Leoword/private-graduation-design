'use strict';

const sequelize = require('../lib/database');
const Collection = sequelize.model('collection');
const Production = sequelize.model('production');

module.exports = function manageCollection(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Production.findAll({
		include: [{
			model: Collection,
			where: {
				touristName: req.session.name
			}
		}]
	}).then(production => {
		if (production.length !== 0) {
			res.status(200).json(production);
		} else {
			res.status(200).json({
				information: '你还没有任何收藏！'
			});
		}
	});
}