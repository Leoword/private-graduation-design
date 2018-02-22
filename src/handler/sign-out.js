'use strict';

module.exports = function signOut(req, res, next) {
	if (!req.session.state) {
		res.status(200).json({
			information: '你还没有进行登陆'
		});

		return;
	}

	req.session.state = false;

	res.status(200).json({
		information: '成功登出！'
	});
};