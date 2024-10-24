const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware pour parser le JSON 
app.use(express.json());
// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
 useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => { 
console.log('MongoDB connecté'); }).catch((err) =>
 { console.error('Erreur de connexion à MongoDB:', 
err.message); }); // Route de base 
app.get('/', (req, res) => {
 res.send('Hello from the server!'); 
}); app.listen(PORT, () => { 
console.log(`Server is running on port ${PORT}`); });