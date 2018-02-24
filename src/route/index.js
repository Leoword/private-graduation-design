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
	deleteProduction,
	signOut,
	getAllProduction,
	getAllNote,
	searchProduction,
	searchNote,
	manageBusiness,
	manageTourist,
	deleteBusiness,
	deleteTourist,
	examNote,
	examProduction,
	examTopic,
	passNote,
	passProduction,
	passTopic,
	addTopic,
	manageTopic,
	deleteTopic,
	getAllTopic,
	addCollection,
	addOrder
} = handlers;

router.post('/signup/tourist', touristSignUp);
router.post('/signup/business', businessSignUp);
router.post('/signin', signIn);
router.get('/signout', signOut);
router.get('/personal/tourist/information', informationOverview);
router.put('/personal/tourist/update', updateTourist);
router.put('/personal/tourist/password', alterTouristPassowrd);
router.post('/personal/tourist/publish', addTranvelNote);
router.post('/personal/tourist/publish/topic', addTopic);
router.get('/personal/tourist/manage', manageNote);
router.put('/personal/tourist/delete', deleteNote);
router.get('/personal/tourist/manage/topic', manageTopic);
router.put('/personal/tourist/delete/topic', deleteTopic);
router.get('/personal/business/information', businessInformation);
router.put('/personal/business/update', updateBusiness);
router.put('/personal/business/password', alterBusinessPassowrd);
router.post('/personal/business/publish', formidable);
router.get('/personal/business/manage-production', manageProduction);
router.put('/personal/business/delete', deleteProduction);
router.post('/main/production', getAllProduction);
router.get('/main/production', getAllProduction);
router.post('/main/note', getAllNote);
router.get('/main/note', getAllNote);
router.post('/main/topic', getAllTopic);
router.get('/main/topic', getAllTopic);
router.post('/search/production', searchProduction);
router.post('/search/note', searchNote);
router.get('/personal/administrator/manageBusiness', manageBusiness);
router.get('/personal/administrator/manageTourist', manageTourist);
router.put('/personal/administrator/deleteTourist', deleteTourist);
router.put('/personal/administrator/deleteBusiness', deleteBusiness);
router.get('/personal/administrator/exam/note', examNote);
router.get('/personal/administrator/exam/production', examProduction);
router.get('/personal/administrator/exam/topic', examTopic);
router.put('/personal/administrator/exam/note', passNote);
router.put('/personal/administrator/exam/production', passProduction);
router.put('/personal/administrator/exam/topic', passTopic);
router.post('/production/collect', addCollection);
router.post('/production/order', addOrder);

module.exports = router;