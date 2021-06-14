const express = require('express');
const router = express.Router();
// load middleware
const authenticator = require('../middleware/auth').checkToken;
// load controller
const routeController = require('../controller/route.controller');

// route
router.get('/getall', authenticator, routeController.getAll);
router.get('/getbyid/:id', authenticator, routeController.getById);

router.post('/insert', authenticator, routeController.insert);

router.post('/editbyid', authenticator, routeController.editById);

router.post('/delbyid/:id', authenticator, routeController.deleteById);

router.get('/swkeepbyid/:id', authenticator, routeController.switchKeepById);

// transit
router.get('/transit/getbyrouteid/:routeid', authenticator, routeController.getTransitByRouteId);

router.post('/transit/insert', authenticator, routeController.insert);

router.post('/transit/editbyid', authenticator, routeController.editById);

router.post('/transit/delbyid/:id', authenticator, routeController.deleteTransitById);

module.exports = router;