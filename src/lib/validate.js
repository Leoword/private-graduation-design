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

const tranvelNote = {
	properties: {
		title: {
			type: 'string'
		},
		content: {
			type: 'string'
		}
	},
	required: ['title', 'content']
};

const production = {
	properties: {
		name: {
			type: 'string'
		},
		type: {
			type: 'string'
		},
		describe: {
			type: 'string'
		},
		image: {
			type: 'object'
		},
	},
	required: ['name', 'type', 'describe', 'image']
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
	case 'tranvelNote':
		validate = ajv.compile(tranvelNote);

		break;
	case 'production':
		validate = ajv.compile(production);

		break;
	default:
		throwError(new Error('no suitable type'), 500);
	}

	const valid = validate(data);

	return valid;	
};