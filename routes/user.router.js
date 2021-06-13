const express = require('express');
const router = express.Router();
// load middleware
const authenticator = require('../middleware/auth').checkToken;
// load controller
const userController = require('../controller/user.controller');

router.get('/getall', authenticator, userController.getAll);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;