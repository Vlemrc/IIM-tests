const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./books');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// Route principale
app.get('/', (req, res) => {
 res.send('API Gestion de Bibliothèque');
});

// Routes pour les livres
app.use('/books', booksRouter);

// Démarrage du serveur
app.listen(PORT, () => {
 console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app; // Pour les tests