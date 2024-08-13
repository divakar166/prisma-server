const prisma = require('../prisma/prismaClient');

// POST a new Insight
exports.createInsight = async (req, res) => {
  try {
    const {
      postId,
      commentId,
      perceivedBy,
      textVector,
      userId,
      oceanScoreId,
      personType,
      perception,
      catchySubject,
      why,
      topics,
      archived,
      read,
      starred,
      highlightText,
      shortSummary,
      title,
      isLiked,
      feedBack,
      desiredPerceptionId
    } = req.body;
    if(userId != null){
      const user = await prisma.linkedInUser.findUnique({
        where: { id: userId },
      });
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }
    }
    

    const insight = await prisma.insight.create({
      data: {
        postId,
        commentId,
        perceivedBy,
        textVector,
        userId,
        oceanScoreId,
        personType,
        perception,
        catchySubject,
        why,
        topics,
        archived,
        read,
        starred,
        highlightText,
        shortSummary,
        title,
        isLiked,
        feedBack,
        desiredPerceptionId
      },
    });

    res.status(201).json({ id: insight.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the insight.' });
  }
};

// GET all Insights
exports.getAllInsights = async (req, res) => {
  try {
    const insights = await prisma.insight.findMany();
    res.json(insights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching insights.' });
  }
};

// GET Insights by User ID
exports.getInsightsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const insights = await prisma.insight.findMany({
      where: {
        userId: parseInt(userId, 10),
      },
    });
    res.json(insights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching insights.' });
  }
};

// GET Specific Insight by ID
exports.getInsightById = async (req, res) => {
  try {
    const { id } = req.params;
    const insight = await prisma.insight.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    if (insight) {
      res.json(insight);
    } else {
      res.status(404).json({ error: 'Insight not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the insight.' });
  }
};
