'use strict';

const sequelize = require('../lib/database');
const TranvelNote = sequelize.model('tranvelNote');
const {throwError} = require('error-standardize');
const validate = require('../lib/validate');

module.exports = function addTranvelNote(req, res, next) {
	if (!validate('tranvelNote', req.body)) {
		throwError(new Error('your title or content is ignore!'), 300);

		return;
	}

	if (!req.session.state) {
		res.status(200).json({
			information: '你还没有进行登录！'
		});

		return;
	}

	TranvelNote.create({
		touristName: req.session.name,
		title: req.body.title,
		content: req.body.content,
		type: req.body.type
	}).then(item => {
		if (item !== null) {
			res.status(200).json({
				information: '提交成功！'
			});
		}
	});
};