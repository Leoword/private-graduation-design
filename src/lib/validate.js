'use strict';

const Ajv = require('ajv');
const {throwError} = require('error-standardize');

const signInSchema = {
	properties: {
		username: {
			type: 'string'
		},
		password: {
			type: 'string'
		}
	},
	required: ['username', 'password']
};

const touristSchema = {
	properties: {
		username: {
			type: 'string'
		},
		password: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		address: {
			type: 'string'
		}
	},
	required: ['username', 'password', 'email']
};

const businessSchema = {
	properties: {
		username: {
			type: 'string'
		},
		password: {
			type: 'string'
		},
		realname: {
			type: 'string'
		},
		id: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		address: {
			type: 'string'
		}
	},
	required: ['username', 'password', 'realname', 'id', 'email', 'address']
};

const ajv = new Ajv({
	allErrors: true
});

module.exports = function validate(type, data) {
	let validate;

	switch (type) {
	case 'signin':
		validate = ajv.compile(signInSchema);

		break;
	case 'tourist':
		validate = ajv.compile(touristSchema);

		break;
	case 'business':
		validate = ajv.compile(businessSchema);

		break;
	default:
		throwError(new Error('no suitable type'), 500);
	}

	const valid = validate(data);

	return valid;	
};