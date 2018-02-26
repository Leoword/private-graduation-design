'use strict';

const sequelize = require('../lib/database');
const Artical = sequelize.model('artical');

module.exports = function deleteArtical(req, res, next) {
	Artical.destroy({
		where: {
			title: req.body.title
		}
	}).then(artical => {

		if (artical !== 0) {
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