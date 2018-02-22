'use strict'

const Formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const sequelize = require('../lib/database');
const validate = require('../lib/validate')
const Production = sequelize.model('production');

module.exports = function formidable(req, res, next) {
	const form = new Formidable.IncomingForm();

	form.uploadDir = path.resolve(__dirname, '../../source-lib');
	form.keepExtensions = true;

	form.parse(req, function(err, fields, files) {
		if (err) {
			throw err;
		}

		if (!validate('production', Object.assign({}, fields, files))) {
			throwError(new Error('your input is ignore!'), 300);
	
			return;
		}

		fs.rename(files.image.path,  path.resolve(__dirname, '../../source-lib') + '/' + files.image.name,
		function() {

			if (!req.session.state) {
				res.status(200).json({
					information: '你还未登录！'
				});
				
				return;
			}
	
			Production.create({
				productionName: fields.name,
				businessName: req.session.name,
				describe: fields.describe,
				price: fields.price,
				type: fields.type,
				image: files.image.name
			}).then(production => {
				if (production !== null) {
					res.status(200).json({
						information: '商品上传成功！'
					});
				}
			});
		});
	});
};