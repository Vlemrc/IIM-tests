const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Order = require('../src/models/order');
const Member = require('../src/models/member');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/boutique_test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

test('should create an order and associate with member', async () => {
    const member = await Member.create({ lastName: 'Doe', firstName: 'John', email: 'john.doe@example.com', password: 'password123' });

    const response = await request(app).post('/api/createOrder').send({
        product: 'T-shirt',
        quantity: 2,
        price: 20,
        memberId: member._id
    });
    expect(response.statusCode).toBe(200);

    const order = await Order.findOne({ memberId: member._id });
    expect(order).not.toBeNull();
    expect(order.product).toBe('T-shirt');
    expect(order.quantity).toBe(2);
});
