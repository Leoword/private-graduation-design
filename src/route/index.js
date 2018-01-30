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
	touristSignUp,
	businessSignUp
} = handlerStore;



router.post('/signup/tourist', touristSignUp);
router.post('/signup/business', businessSignUp);
router.post('/signin', signIn);

module.exports = router;