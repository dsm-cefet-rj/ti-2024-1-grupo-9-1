const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware'); // Use require para importar middleware

const secret = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, pagante } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10); // Hash da senha
        const newUser = new User({ username, email, password: hashedPassword, pagante });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        //const isMatch = await bcrypt.compare(user.password, password);

       // if (!isMatch) {
       //     return res.status(401).json({ message: 'Senha incorreta' });
       // }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
});

router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({ username: user.username, pagante: user.pagante });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
});

module.exports = router;
