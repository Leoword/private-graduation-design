'use strict';

const sequelize = require('../lib/database');
const TranvelNote = sequelize.model('tranvelNote');

module.exports = function examNote(req, res, next) {
	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还没有登录！'
		});

		return;
	}

	TranvelNote.findAll({
		where: {
			state: '待审核'
		}
	}).then(tranvelNote => {
		if (tranvelNote.length !== 0) {
			res.status(200).json(tranvelNote);
		} else {
			res.status(200).json({
				information: '现在没有任何游记需要审核！'
			});
		}
	});
}