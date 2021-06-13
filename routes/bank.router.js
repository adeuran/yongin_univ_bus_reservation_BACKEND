const express = require('express');
const router = express.Router();
// load middleware
const authenticator = require('../middleware/auth').checkToken;
// load controller
const bankController = require('../controller/bank.controller');

router.get('/getall', authenticator, bankController.getAll);
router.get('/getbyid/:id', authenticator, bankController.getById);

module.exports = router;