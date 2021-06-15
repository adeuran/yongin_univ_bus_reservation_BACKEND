const express = require('express');
const router = express.Router();
// load middleware
const authenticator = require('../middleware/auth').checkToken;
// load controller
const reservationController = require('../controller/reservation.controller');

router.get('/getall/', authenticator, reservationController.getAll);
router.get('/getbyid/:id', authenticator, reservationController.getById);
router.get('/getbyuserid/:userid', authenticator, reservationController.getByUserId);
router.get('/getbybusid/:busid', authenticator, reservationController.getByBusId);

router.post('/insert', authenticator, reservationController.insert);

router.post('/cancel', authenticator, reservationController.cancel);
router.post('/board', authenticator, reservationController.board);
router.post('/forcecancel', authenticator, reservationController.forceCancel);
router.post('/unboard', authenticator, reservationController.unboard);

module.exports = router;