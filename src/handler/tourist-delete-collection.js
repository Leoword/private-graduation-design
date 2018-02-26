'use strict';

const sequelize = require('../lib/database');
const Collection = sequelize.model('collection');
const Production = sequelize.model('production');

module.exports = function deleteCollection(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}
	
	Collection.findOne({
		where: {
			collectionNumber: req.body.collections[0].collectionNumber
		}
	}).then(collection => {
		Production.findOne({
			where: {
				productionNumber: collection.productionNumber
			}
		}).then(production => {
			production.decrement('collectNumber').then(production => {

				Collection.destroy({
					where: {
						collectionNumber: req.body.collections[0].collectionNumber
					}
				}).then(num => {
					if (num !== 0) {
						res.status(200).json({
							prompt: '删除成功,请刷新！'
						});
					} else {
						res.status(200).json({
							prompt: '你还没有收藏任何商品！'
						});
					}
				});
		
			});

		});
	})
}