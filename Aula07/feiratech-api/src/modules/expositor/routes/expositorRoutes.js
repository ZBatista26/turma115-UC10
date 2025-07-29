const express = require('express');
const router = express.Router();
const expositorController = require('../controllers/expositorController');

router.post('/', expositorController.criar);



module.exports = router;
