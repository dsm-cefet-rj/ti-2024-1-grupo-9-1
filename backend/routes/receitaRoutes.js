const express = require('express');
const router = express.Router();
const Recipe = require('../models/Receita');
const Rating = require('../models/Rating');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para buscar todas as receitas (protegida)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const recipes = await Recipe.find(); // Busca todas as receitas no banco de dados
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar receitas' });
    }
});

// Rota para buscar uma receita específica pelo ID (protegida)
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findOne({ id: id });
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        const ratings = await Rating.find({ recipeId: id });
        const averageRating = ratings.length > 0
            ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
            : 'No ratings yet';

        res.json({ recipe, averageRating });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
