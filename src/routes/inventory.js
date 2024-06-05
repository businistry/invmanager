const express = require('express');
const router = express.Router();

// @route   GET api/inventory
// @desc    Get all inventory items
// @access  Public
router.get('/', (req, res) => {
  res.send('Get all inventory items');
});

module.exports = router;
