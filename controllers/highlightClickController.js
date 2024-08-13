const prisma = require('../prisma/prismaClient');

// GET all HighlightClicks
exports.getAllHighlightClicks = async (req, res) => {
    try {
        const highlightClicks = await prisma.highlightClick.findMany({
            include: {
                NewPerception: true
            }
        });
        res.status(200).json(highlightClicks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching highlight clicks.' });
    }
};

// POST a new HighlightClick
exports.createHighlightClick = async (req, res) => {
    const { highlightText, insightId, newPerceptionId } = req.body;

    try {
        const newHighlightClick = await prisma.highlightClick.create({
            data: {
                highlightText,
                insightId,
                newPerceptionId
            },
        });
        res.status(201).json(newHighlightClick);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the highlight click.' });
    }
};