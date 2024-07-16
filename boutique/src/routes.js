const express = require('express');
const memberController = require('./controllers/memberController');
const orderController = require('./controllers/orderController');

const router = express.Router();

// Routes pour les membres
router.post('/register', memberController.register);
router.post('/login', memberController.login);

// Routes pour les commandes
router.post('/createOrder', orderController.createOrder);
router.get('/orders/:memberId', orderController.getOrdersByMember);

module.exports = router;
