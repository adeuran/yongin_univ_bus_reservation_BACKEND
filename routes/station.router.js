const express = require('express');
const router = express.Router();
const stationController = require('../controller/station.controller');

router.get('/getall', stationController.getAll);
router.get('/getallwithdetail', stationController.getAllWithDetail);
router.get('/getbyid/:id', stationController.getById);
router.get('/getbyname/:name', stationController.getByName);

module.exports = router;