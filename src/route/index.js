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
	alterTouristPassowrd,
	addTranvelNote,
	manageNote,
	deleteNote,
	businessInformation,
	updateBusiness,
	alterBusinessPassowrd,
	formidable,
	manageProduction,
	deleteProduction
} = handlers;



router.post('/signup/tourist', touristSignUp);
router.post('/signup/business', businessSignUp);
router.post('/signin', signIn);
router.get('/personal/tourist/information', informationOverview);
router.put('/personal/tourist/update', updateTourist);
router.put('/personal/tourist/password', alterTouristPassowrd);
router.post('/personal/tourist/publish', addTranvelNote);
router.get('/personal/tourist/manage', manageNote);
router.put('/personal/tourist/delete', deleteNote);
router.get('/personal/business/information', businessInformation);
router.put('/personal/business/update', updateBusiness);
router.put('/personal/business/password', alterBusinessPassowrd);
router.post('/personal/business/publish', formidable);
router.get('/personal/business/manage-production', manageProduction);
router.put('/personal/business/delete', deleteProduction);

module.exports = router;