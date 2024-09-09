const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');

// Rota para criar uma nova avaliação para uma receita
router.post('/', async (req, res) => {
    try {
        const { recipeId, rating, comment, userId } = req.body;
        
        // Validação simples para garantir que o rating esteja no intervalo de 1 a 5
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: 'Rating deve estar entre 1 e 5 estrelas' });
        }

        // Criação da nova avaliação
        const newRating = new Rating({ recipeId, rating, comment, userId });
        await newRating.save();

        res.status(201).json(newRating);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para buscar todas as avaliações de uma receita
router.get('/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        
        // Busca todas as avaliações relacionadas à receita
        const ratings = await Rating.find({ recipeId });

        // Cálculo da média das avaliações
        const averageRating = ratings.length > 0
            ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
            : 'Sem avaliações ainda';

        res.json({ ratings, averageRating });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
