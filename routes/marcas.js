const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/marcasController');

router.get('/', brandsController.getBrands);
router.get('/:marca', brandsController.getBrand);

module.exports = router;