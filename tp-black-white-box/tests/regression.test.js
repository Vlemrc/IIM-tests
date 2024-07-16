const orderService = require('../components/orderService');
describe('Regression Tests for Order Service', () => {
 beforeAll(() => {
 // Perform setup tasks if needed before running regression tests
 });
 it('should handle regression scenario 1', () => {
 // Test scenario 1: Testing a critical feature after a major code update
 const order = [
 { productId: 1, quantity: 3 },
 { productId: 2, quantity: 2 }
 ];
 const totalPrice =
orderService.calculateTotalPrice(order);
 expect(totalPrice).toBe(25); // Adjust based on expected changes
 });
 // Add more regression tests as needed
 afterAll(() => {
 // Perform cleanup tasks if needed after running all regression tests
 });
});