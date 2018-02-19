'use strict';

const sequelize = require('../lib/database');
const TravelNote = sequelize.model('tranvelNote');

module.exports = function deleteNote(req, res, next) {
	TravelNote.destroy({
		where: {
			title: req.body.title
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