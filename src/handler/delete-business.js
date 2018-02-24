'use strict';

const sequelize = require('../lib/database');
const Business = sequelize.model('business');

module.exports = function deleteBusiness(req, res, next) {
	Business.destroy({
		where: {
			businessName: req.body.businessName
		}
	}).then(business => {

		if (business !== 0) {
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