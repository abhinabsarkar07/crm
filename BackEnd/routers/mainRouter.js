const express = require('express');
const router = express.Router();
const formRoute = require('../routers/formRouter');
const userRoute = require('../routers/userRouter')

router.use('/form',formRoute);
router.use('/user',userRoute)

module.exports = router