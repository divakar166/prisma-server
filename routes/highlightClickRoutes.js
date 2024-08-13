const express = require('express');
const router = express.Router();
const { getAllHighlightClicks, createHighlightClick } = require('../controllers/highlightClickController');

router.get('/', getAllHighlightClicks);
router.post('/', createHighlightClick);

module.exports = router;
