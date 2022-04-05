const route = require('color-convert/route');
const express = require('express');
const { getRequest, postRequest } = require('../controllers/mainController')
const router = express.Router(); 


router.get('/', getRequest);
router.post('/', postRequest);
module.exports = router;