const { calculateTotal } = require('../src/controllers/orderController');

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
