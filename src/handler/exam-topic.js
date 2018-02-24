'use strict';

const sequelize = require('../lib/database');
const Topic = sequelize.model('topic');

module.exports = function passTopic(req, res, next) {
	const { state, topicNumber} = req.body;

	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还未登录！'
		});

		return;
	}

	Topic.update({
		state
	},
	{
		where: {
			topicNumber: topicNumber
		}
	}).then(topic => {
		if (topic !== null) {
			res.status(200).json({
				information: '修改成功！'
			});
		}
	});
}