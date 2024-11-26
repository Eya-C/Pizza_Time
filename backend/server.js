require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const pizzaRoutes = require('./pizzaRoutes'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', pizzaRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

