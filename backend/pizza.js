const mongoose = require('mongoose');
const pizzaSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prix: {
    type: String,
    required: true,
  },
  ingrédients: {
    type: [String],
    required: true,
  },
  quantité: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('pizza', pizzaSchema);
