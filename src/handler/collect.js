'use strict';

const sequelize = require('../lib/database');
const Collection = sequelize.model('collection');
const Production = sequelize.model('production');

module.exports = function addCollection(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有进行登录(必须是游客身份登录)！'
		});

		return;
	}

	Collection.create({
		touristName: req.session.name,
		productionName: req.body.productionName
	}).then(collection => {
		if (collection !== null) {
			Production.findOne({
				where: {
					productionName: collection.productionName
				}
			}).then(production => {
				production.increment('collectNumber').then(production => {

					res.status(200).json({
						information: '收藏成功！'
					});
				});

			})
		}
	});
};