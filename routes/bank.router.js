const express = require('express');
const router = express.Router();
const bankController = require('../controller/bank.controller');

router.get('/getall', bankController.getAll);
router.get('/getbyid/:id', bankController.getById);

module.exports = router;