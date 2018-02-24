'use strict';

const sequelize = require('../lib/database');
const Tourist = sequelize.model('tourist');

module.exports = function deleteTourist(req, res, next) {
	Tourist.destroy({
		where: {
			touristName: req.body.touristName
		}
	}).then(tourist => {

		if (tourist !== 0) {
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