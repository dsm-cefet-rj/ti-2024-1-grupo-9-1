const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const myMiddleware = require('./middlewares/Middleware');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});


app.use(myMiddleware);
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/receitaRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);
app.use('/ratings', ratingRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
