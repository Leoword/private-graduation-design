const sequelize = require('../lib/database');
const Artical = sequelize.model('artical');

module.exports = function getAllArtical(req, res, next) {
	if (req.body.typeValue === ''|| req.body.typeValue === undefined) {
		Artical.findAll().then(artical => {
			if (artical.length !== 0) {
				res.status(200).json(artical);
			}
		});
	} else {
		Artical.findAll({
			where: {
				type: req.body.typeValue
			}
		}).then(artical => {
			res.status(200).json(artical);
		});
	}
};