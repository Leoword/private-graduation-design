const express = require('express');
const path = require('path');
const router = express.Router();
const loader = require('express-handler-loader');

loader('handlers', {
	pathname: path.resolve(__dirname, '../handler')
});

const handlers = loader('handlers');

const {
	signIn,
	touristSignUp,
	businessSignUp,
	informationOverview,
	updateTourist,
	alterTouristPassowrd
} = handlers;



router.post('/signup/tourist', touristSignUp);
router.post('/signup/business', businessSignUp);
router.post('/signin', signIn);
router.get('/personal/tourist/information', informationOverview);
router.put('/personal/tourist/update', updateTourist);
router.put('/personal/tourist/password', alterTouristPassowrd);

module.exports = router;