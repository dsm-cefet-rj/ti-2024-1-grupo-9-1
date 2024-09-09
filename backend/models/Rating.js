const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    recipeId: { type: Schema.Types.ObjectId, ref: 'Recipe' },
    rating: Number,
    comment: String,
    userId: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rating', ratingSchema);
