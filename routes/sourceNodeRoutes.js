const express = require('express');
const router = express.Router();
const { getAllSourceNodes, createSourceNode } = require('../controllers/sourceNodeController');

router.get('/', getAllSourceNodes);
router.post('/', createSourceNode);

module.exports = router;
