const Painting = require('../models/Paintings');

const getAllPaintings = async (req, res) => {
    try {
        const paintings = await Painting.find({});

        res.json(paintings);
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

const getPaintingsById = async (req, res) => {
    try {
        const painting = await Painting.findById(req.params.id);

        res.json(painting);
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllPaintings,
    getPaintingsById
}