const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/getall', userController.getAll);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;