'use strict';

const sequelize = require('../lib/database');
const Collection = sequelize.model('collection');
const Production = sequelize.model('production');

module.exports = function recommend(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Production.findAll({
		attributes: ['type'],
		group:'type',
		include: [{
			model: Collection,
			where: {
				touristName: req.session.name
			}
		}]
	}).then(list => {
		if (list.length === 0) {
			res.status(200).json({
				information: '无相关推荐！'
			});

			return;
		}
		const typeList = [];
		let productionList = [];

		list.forEach(item => {
			typeList.push(item.type);
		});

		typeList.forEach((type, i) => {
			Production.findAll({
				where: {
					type: type
				}
			}).then(production => {
				productionList.push(...production);

				return productionList;
			}).then(productionList => {
				
				if (i === typeList.length -1) {
					res.status(200).json(productionList);
				}
			});
		});
	});
}