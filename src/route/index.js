const express = require('express');
const path = require('path');
const router = express.Router();

const {
	loadHandlerFromDir,
	handlerStore
} = require('cdx-handler-loader');

const HANDLER_PATH = path.resolve(__dirname, '../handler');

loadHandlerFromDir(HANDLER_PATH);

const {
	signIn,
	signUp
} = handlerStore;

router.post('/signup', signUp);

router.post('/signin', signIn);

module.exports = router;