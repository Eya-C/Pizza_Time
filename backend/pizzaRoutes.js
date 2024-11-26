
const express = require('express');
const router = express.Router();
const Pizza = require('./pizza'); // Importer le modèle Pizza

// Route pour ajouter une pizza
router.post('/add-pizza', async (req, res) => {
  try {
    const newPizza = new Pizza(req.body);
    const savedPizza = await newPizza.save();
    res.status(201).json(savedPizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour obtenir toutes les pizzas
router.get('/pizzas', async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour mettre à jour une pizza
router.put('/update-pizza/:id', async (req, res) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour supprimer une pizza
router.delete('/delete-pizza/:id', async (req, res) => {
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pizza supprimée', deletedPizza });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
