'use strict';

const sequelize = require('../lib/database');
const Production = sequelize.model('production');

module.exports = function deleteProduction(req, res, next) {
	
	Production.destroy({
		where: {
			productionName: req.body.productionName
		}
	}).then(note => {

		if (note !== 0) {
			res.status(200).json({
				prompt: '删除成功,请刷新！'
			});
		} else {
			res.status(200).json({
				information: '你还没有发布任何游记！'
			});
		}
	});
}