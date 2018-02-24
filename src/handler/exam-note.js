'use strict';

const sequelize = require('../lib/database');
const TranvelNote = sequelize.model('tranvelNote');

module.exports = function passNote(req, res, next) {
	const { state, title } = req.body;

	if (!req.session.state || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还未登录！'
		});

		return;
	}

	TranvelNote.update({
		state
	},
	{
		where: {
			title: title
		}
	}).then(note => {
		if (note !== null) {
			res.status(200).json({
				information: '修改成功！'
			});
		}
	});
}