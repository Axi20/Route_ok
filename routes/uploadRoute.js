
const express = require('express');
const { getRequest, postRequest } = require('../controllers/uploadController');

const router = express.Router(); 


router.get('/', getRequest);
router.post('/', postRequest);

module.exports = router;