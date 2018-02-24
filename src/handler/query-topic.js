'use strict';

const sequelize = require('../lib/database');
const Topic = sequelize.model('topic');

module.exports = function getAllTopic(req, res, next) {
	if (req.body.typeValue === ''|| req.body.typeValue === undefined) {
		Topic.findAll({
			where: {
				state: '通过'
			}
		}).then(topic => {
			if (topic.length !== 0) {
				res.status(200).json(topic);
			}
		});
	} else {
		Topic.findAll({
			where: {
				type: req.body.typeValue,
				state: '通过'
			}
		}).then(topic => {
			res.status(200).json(topic);
		});
	}
};