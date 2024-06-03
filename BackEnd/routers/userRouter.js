const express = require('express');
const router = express.Router();
const user = require('../contollers/userController');


router.post('/create',user.userRegister);
router.post('/login',user.userLogin);



module.exports = router