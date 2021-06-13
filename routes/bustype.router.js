const express = require('express');
const router = express.Router();
const busTypeController = require('../controller/bustype.controller');

router.get('/getall', busTypeController.getAll);
router.get('/getbyid/:id', busTypeController.getById);

module.exports = router;