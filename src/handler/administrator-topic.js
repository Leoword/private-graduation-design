'use strict';

const sequelize = require('../lib/database');
const Topic = sequelize.model('topic');

module.exports = function examTopic(req, res, next) {
	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Topic.findAll({
		where: {
			state: '待审核'
		}
	}).then(topic => {
		if (topic.length !== 0) {
			res.status(200).json(topic);
		} else {
			res.status(200).json({
				information: '现在没有任何话题需要审核！'
			});
		}
	});
}