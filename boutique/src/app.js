const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Connexion à MongoDB
const mongoUri = 'mongodb://localhost:27017/boutique';

mongoose.connect(mongoUri)
    .then(() => {
        console.log('Connecté à la base de données MongoDB');
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données', err);
    });

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
