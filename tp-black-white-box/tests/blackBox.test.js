const orderService = require('../components/orderService');
describe('Black Box Tests for Order Service', () => {
 it('should calculate total price correctly', () => {
 // Test scenario 1: Calculate total price for a valid order
 const order = [
 { productId: 1, quantity: 2 },
 { productId: 2, quantity: 1 }
 ];
 const totalPrice =
orderService.calculateTotalPrice(order);
 expect(totalPrice).toBe(15); // Assuming 1st product costs 5 and 2nd costs 10
 });
 it('should throw error for invalid input', () => {
 // Test scenario 2: Handling invalid input
 expect(() => orderService.calculateTotalPrice(null)).toThrow();
 });
 // Add more black box tests as needed
});