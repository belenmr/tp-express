const express = require('express');
const router = express.Router();
const branchesController = require('../controllers/sucursalesController');

router.get('/', branchesController.getBranches);
router.get('/:sucursal', branchesController.getBranch);

module.exports = router;