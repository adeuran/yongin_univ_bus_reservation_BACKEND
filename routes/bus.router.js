const express = require('express');
const router = express.Router();
// load middleware
const authenticator = require('../middleware/auth').checkToken;
// load controller
const busController = require('../controller/bus.controller');

router.get('/getall', authenticator, busController.getAll);
router.get('/getbyid/:id', authenticator, busController.getById);
router.get('/getbyplate/:plate', authenticator, busController.getByPlate);
router.get('/getbybustypeid/:bustype_id', authenticator, busController.getByPlate);

module.exports = router;