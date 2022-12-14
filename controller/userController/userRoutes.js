const express = require('express');
const userController = require('./userController')
const router = express.Router();

router.get('/getUsers',  userController.getUsers);
router.post('/create',  userController.createUser);


module.exports = router;