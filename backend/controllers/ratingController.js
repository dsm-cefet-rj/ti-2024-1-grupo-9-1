const Rating = require('../models/Rating');
const Receita = require('../models/Receita');

exports.submitRating = async (req, res) => {
    const { rating } = req.body;
    const { receitaId } = req.params;
    try {
        const newRating = await Rating.create({ rating, user: req.user.id, receita: receitaId });
        await Receita.findByIdAndUpdate(receitaId, { $push: { ratings: newRating._id } });
        res.status(201).json(newRating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
