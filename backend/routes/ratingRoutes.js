const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');

router.post('/ratings', async (req, res) => {
    try {
        const { recipeId, rating, comment, userId } = req.body;
        const newRating = new Rating({ recipeId, rating, comment, userId });
        await newRating.save();
        res.status(201).json(newRating);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/ratings/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        const ratings = await Rating.find({ recipeId });
        res.json(ratings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = router;
