const express = require('express');
const router = express.Router();
// load middleware
const authenticator = require('../middleware/auth').checkToken;
// load controller
const stationController = require('../controller/station.controller');

router.get('/getall', authenticator,stationController.getAll);
router.get('/getallwithdetail', authenticator,stationController.getAllWithDetail);
router.get('/getbyid/:id', authenticator,stationController.getById);
router.get('/getbyname/:name', authenticator,stationController.getByName);

module.exports = router;