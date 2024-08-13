const express = require('express');
const router = express.Router();
const {
  createInsight,
  getAllInsights,
  getInsightsByUserId,
  getInsightById
} = require('../controllers/insightController');

router.post('/', createInsight);
router.get('/', getAllInsights);
router.get('/:userId', getInsightsByUserId);
router.get('/insight/:id', getInsightById);

module.exports = router;
