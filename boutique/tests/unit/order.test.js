const { calculateTotal } = require('../../src/controllers/orderController');

test('should calculate total for a single product', () => {
    const order = [
        { product: 'T-shirt', price: 20, quantity: 1 }
    ];
    expect(calculateTotal(order)).toBe(20);
});

test('should calculate total for multiple products', () => {
    const order = [
        { product: 'T-shirt', price: 20, quantity: 1 },
        { product: 'Pantalon', price: 40, quantity: 2 }
    ];
    expect(calculateTotal(order)).toBe(100);
});

test('should calculate total for multiple products with different quantities', () => {
    const order = [
        { product: 'T-shirt', price: 20, quantity: 1 },
        { product: 'Pantalon', price: 40, quantity: 3 },
        { product: 'Chaussures', price: 60, quantity: 1 }
    ];
    expect(calculateTotal(order)).toBe(200);
});

test('should return zero for an empty order', () => {
    const order = [];
    expect(calculateTotal(order)).toBe(0);
});