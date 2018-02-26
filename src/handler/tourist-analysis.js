'use strict';

const sequelize = require('../lib/database');
const Sequelize = require('sequelize');
const Collection = sequelize.model('collection');
const Order = sequelize.model('order');
const Production = sequelize.model('production');

module.exports = function analysis(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Production.findAll({
		attributes: ['type', [Sequelize.fn('COUNT', Sequelize.col('type')), 'number']],
		group:'type',
		include: [{
			model: Collection,
			where: {
				touristName: req.session.name
			}
		}]
	}).then(collection => {
		Production.findAll({
			attributes: ['type', [Sequelize.fn('COUNT', Sequelize.col('type')), 'number']],
			group:'type',
			include: [{
				model: Order,
				where: {
					touristName: req.session.name
				}
			}]
		}).then(order => {
			res.status(200).json({
				collection: collection,
				order: order
			});
		})
	});
}