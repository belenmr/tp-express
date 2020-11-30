const express = require('express');
const router = express.Router();
const carsController = require('../controllers/autosController');

router.get('/', carsController.getCars);
router.get('/:marca/:dato?', carsController.getCarsForBrandAndData);

module.exports = router;