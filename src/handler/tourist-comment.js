'use strict';

const sequelize = require('../lib/database');
const Comment = sequelize.model('comment');

module.exports = function addComment(req, res, next) {
	if (!req.session.state  || req.session.type !== 'tourist') {
		res.status(200).json({
			information: '你还没有进行登录(必须是游客身份登录)！'
		});

		return;
	}

	Comment.create({
		touristName: req.session.name,
		topicNumber: req.body.relativeTopic.topicNumber,
		content: req.body.content,
		type: req.body.relativeTopic.type
	}).then(comment => {
		res.status(200).json({
			information: '发布评论成功！'
		});
	});
};