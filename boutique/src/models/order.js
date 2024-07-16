const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
