// src/controllers/sourceNodeController.js
const prisma = require('../prisma/prismaClient');

// GET all SourceNodes
exports.getAllSourceNodes = async (req, res) => {
    try {
        const sourceNodes = await prisma.sourceNode.findMany({
            include: {
                Insight: true
            }
        });
        res.status(200).json(sourceNodes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching source nodes.' });
    }
};

// POST a new SourceNode
exports.createSourceNode = async (req, res) => {
    const { node_id, metadata, insightId, action, date, linkToSource, summaryOfNode, tags } = req.body;

    try {
        const newSourceNode = await prisma.sourceNode.create({
            data: {
                node_id,
                metadata,
                insightId,
                action,
                date,
                linkToSource,
                summaryOfNode,
                tags
            },
        });
        res.status(201).json(newSourceNode);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the source node.' });
    }
};
