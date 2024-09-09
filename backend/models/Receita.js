const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    autor: String,
    videoUrl: String,
    ingredientes: [String],
    modoPreparo: [String],
    category: String,
    imageUrl: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
