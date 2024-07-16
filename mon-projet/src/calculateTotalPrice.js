function calculateTotalPrice(products) {
 if (!Array.isArray(products)) {
 throw new Error("Input must be an array");
 }

 return products.reduce((total, product) => {
 const { price, quantity } = product;
 if (typeof price !== 'number' || typeof quantity !== 'number') {
    throw new Error("Price and quantity must be numbers");
 }
    return total + price * quantity;
 }, 0);
}

module.exports = calculateTotalPrice;