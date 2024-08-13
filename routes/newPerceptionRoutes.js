const express = require('express');
const router = express.Router();
const { getAllNewPerceptions, createNewPerception } = require('../controllers/newPerceptionController');

router.get('/', getAllNewPerceptions);
router.post('/', createNewPerception);

module.exports = router;
