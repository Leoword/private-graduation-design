'use strict';

const sequelize = require('../lib/database');
const Topic = sequelize.model('topic');

module.exports = function manageTopic(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	Topic.findAll({
		where: {
			touristName: req.session.name
		}
	}).then(topic => {
		if (topic.length !== 0) {
			res.status(200).json(topic);
		} else {
			res.status(200).json({
				information: '你还没有发布任何话题！'
			});
		}
	});
}