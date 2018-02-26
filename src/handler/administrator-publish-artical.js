const sequelize = require('../lib/database');
const Artical = sequelize.model('artical');
const {throwError} = require('error-standardize');
const validate = require('../lib/validate');

module.exports = function addArtical(req, res, next) {
	if (!validate('tranvelNote', req.body)) {
		throwError(new Error('your title or content is ignore!'), 300);

		return;
	}

	if (!req.session.state  || req.session.type !== 'administrator') {
		res.status(200).json({
			information: '你还没有进行登录！'
		});

		return;
	}

	Artical.create({
		administrator: req.session.name,
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