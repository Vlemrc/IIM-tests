const Order = require('../models/order');

// Calcul du total de la commande
const calculateTotal = (order) => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Création d'une commande
const createOrder = async (req, res) => {
    const { product, quantity, price, memberId } = req.body;

    try {
        const newOrder = new Order({ product, quantity, price, memberId });
        await newOrder.save();
        res.status(200).json({ message: 'Commande créée avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de la commande', error: err });
    }
};

// Récupération des commandes par membre
const getOrdersByMember = async (req, res) => {
    const { memberId } = req.params;

    try {
        const orders = await Order.find({ memberId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des commandes', error: err });
    }
};

module.exports = {
    createOrder,
    getOrdersByMember,
    calculateTotal
};
