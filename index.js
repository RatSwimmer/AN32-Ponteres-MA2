/* 
    This is a mini activity for Programming Tools and Technique
*/

// Declare store information as constant
const storeName = "Chocola Store";
const storeLocation = "Chocola World";
const storeCapacity = 100;

// Outputs the store information to the console
console.log("Store Name: ", storeName);
console.log("Store Location: ", storeLocation);

// Declare name, price and quantity as let
let name;
let price;
let quantity;

// Creates an array for products
let products = [
    {name: "Laptop", price: 18999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 12999, quantity: 80}
];

// Counts the total number of products
let totalNumberProducts = 0;

for (let product of products) {
    totalNumberProducts += product.quantity;
}

// Counts the total inventory value
let totalInventoryValue = 0;

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
}

// Outputs the number of products and inventory value in the console
console.log("Total Number of Products: ", totalNumberProducts);
console.log("Total Inventory Value: ", totalInventoryValue);

// Add 10 to the laptop quantity
const addLaptop = 10;
products[0].quantity += addLaptop;

// Get the highest price out of all products
let highestPriceProductName = "";
let highestPrice = 0;

for (let product of products) {
    if (product.price > highestPrice) {
        highestPrice = product.price;
        highestPriceProductName = product.name;
    }
}

// Outputs the updated laptop quantity and the most expensive product
console.log("Updated Laptop Quantity: ", products[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);
