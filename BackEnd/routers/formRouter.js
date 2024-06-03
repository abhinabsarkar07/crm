const express = require('express');
const router = express.Router();
const Form = require('../contollers/formController');

router.post('/AddForm',Form.AddData);
router.get('/getData',Form.getFormData);
router.delete('/delete/:id',Form.deleteFormData)


module.exports = router