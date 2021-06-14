const express = require('express');
const router = express.Router();
// load middleware
const authenticator = require('../middleware/auth').checkToken;
// load controller
const scheduleController = require('../controller/schedule.controller');

router.get('/getall', authenticator, scheduleController.getAll);
router.get('/getbyid/:id', authenticator, scheduleController.getById);
router.get('/getbydetail/:routetype/:date/:routeid', authenticator, scheduleController.getByDetail);
router.post('/insert', authenticator, scheduleController.insert);
router.post('/insertusingroute', authenticator, scheduleController.insertUsingRoute);
router.post('/editbyid', authenticator, scheduleController.editById);
router.get('/swstatebyid/:id', authenticator, scheduleController.switchStateById);

module.exports = router;