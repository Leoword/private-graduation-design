'use strict';

const sequelize = require('../lib/database');
const TravelNote = sequelize.model('tranvelNote');

module.exports = function manageNote(req, res, next) {
	if (!req.session.state) {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	TravelNote.findAll({
		where: {
			touristName: req.session.name
		}
	}).then(note => {
		if (note.length !== 0) {
			res.status(200).json(note);
		} else {
			res.status(200).json({
				information: '你还没有发布任何游记！'
			});
		}
	});
}