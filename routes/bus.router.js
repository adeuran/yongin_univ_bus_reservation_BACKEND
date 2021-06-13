const express = require('express');
// load middleware
const author = require('../middleware/auth').checkToken;
const router = express.Router();
const busController = require('../controller/bus.controller');

router.get('/getall', author, busController.getAll);
router.get('/getbyid/:id', busController.getById);
router.get('/getbyplate/:plate', busController.getByPlate);
router.get('/getbybustypeid/:bustype_id', busController.getByPlate);

module.exports = router;