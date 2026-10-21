// Run from the repository root: node lectures/06-objects-and-classes/practice/03-json-practice.js
const product = {
  name: "Wireless Mouse",
  price: 25,
  inStock: true,
};

const productJson = JSON.stringify(product);

console.log(productJson);

const parsedProduct = JSON.parse(productJson);

console.log(parsedProduct.name, parsedProduct.price);

console.log(
  "Practice: change the price in parsedProduct, then stringify it again and log the new JSON text.",
);
