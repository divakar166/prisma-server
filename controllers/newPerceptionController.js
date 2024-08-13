// src/controllers/newPerceptionController.js
const prisma = require('../prisma/prismaClient');

// GET all NewPerceptions
exports.getAllNewPerceptions = async (req, res) => {
    try {
        const newPerceptions = await prisma.newPerception.findMany({
            include: {
                Insight: true,
                LinkedInUser: true
            }
        });
        res.status(200).json(newPerceptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching new perceptions.' });
    }
};

// POST a new NewPerception
exports.createNewPerception = async (req, res) => {
    const { text, persona, summaryOfPerception, isPositive, insightId, highlightTexts } = req.body;

    try {
        const newNewPerception = await prisma.newPerception.create({
            data: {
                text,
                persona,
                summaryOfPerception,
                isPositive,
                insightId,
                highlightTexts
            },
        });
        res.status(201).json(newNewPerception);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the new perception.' });
    }
};
