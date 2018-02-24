'use strict';

const sequelize = require('../lib/database');
const Topic = sequelize.model('topic');

module.exports = function deleteTopic(req, res, next) {
	Topic.destroy({
		where: {
			title: req.body.title
		}
	}).then(topic => {

		if (topic !== 0) {
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