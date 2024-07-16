const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));
let users = {};
let orders = [];
// Endpoint pour soumettre les informations de l'utilisateur
app.post('/submit', (req, res) => {
 const { name, email, phone } = req.body;
 if (name && email) {
 users[email] = { name, phone, fruits: [] };
 res.status(200).send({ message: 'Formulaire reçu!' });
 } else {
 res.status(400).send({ error: 'Nom et email sont requis' });
 }
});
// Passer une commande de fruits
app.post('/order', (req, res) => {
 const { fruits: orderedFruits } = req.body;
 const email = Object.keys(users)[0]; // Utilisation d'un email pour l'exemple
 if (!users[email]) {
 return res.status(400).send({ error: 'Utilisateur non trouvé' });
 }
 for (let fruit in orderedFruits) {
 const quantity = orderedFruits[fruit];
 if (quantity > 0) {
 users[email].fruits.push({ name: fruit, quantity
});
 orders.push({ name: fruit, quantity });
 }
 }
 return res.status(200).send({ message: 'Commande réussie!' });
});
// Récupérer les fruits commandés
app.get('/fruits', (req, res) => {
 const email = Object.keys(users)[0];
 if (users[email]) {
 return res.status(200).send({ fruits:
users[email].fruits });
 }
 return res.status(404).send({ error: 'Aucun fruit trouvé' });
});
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
 console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
// Méthode pour fermer le serveur
const closeServer = () => {
 return new Promise(resolve => {
 server.close(resolve);
 });
};
module.exports = {
 app,
 close: closeServer,
};