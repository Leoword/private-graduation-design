'use strict';

const sequelize = require('../lib/database');
const TravelNote = sequelize.model('tranvelNote');

module.exports = function getAllNote(req, res, next) {
	if (req.body.typeValue === ''|| req.body.typeValue === undefined) {
		TravelNote.findAll({
			where: {
				state: '通过'
			}
		}).then(note => {
			if (note.length !== 0) {
				res.status(200).json(note);
			}
		});
	} else {
		TravelNote.findAll({
			where: {
				type: req.body.typeValue,
				state: '通过'
			}
		}).then(note => {
			res.status(200).json(note);
		});
	}
};