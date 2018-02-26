const sequelize = require('../lib/database');
const Comment = sequelize.model('comment');

module.exports = function getAllComment(req, res, next) {

	Comment.findAll({
		where: {
			topicNumber: req.body.topicNumber
		}
	}).then(comment => {
		if (comment.length !== 0) {
			res.status(200).json(comment);
		} else {
			res.status(200).json({
				information: '该话题没有评论！'
			});
		}
	});
};