const Receita = require('../models/Receita');

exports.getReceitas = async (req, res) => {
    try {
        const receitas = await Receita.find().populate('ratings');
        res.json(receitas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReceitaById = async (req, res) => {
    try {
        const receita = await Receita.findById(req.params.id).populate('ratings');
        if (!receita) return res.status(404).json({ message: 'Receita not found' });
        res.json(receita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
