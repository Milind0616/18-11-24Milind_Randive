function checkBasket(fruits) {
    const uniqueFruits = new Set(fruits);

    if (uniqueFruits.size > 1) {
        console.log("Mixed Basket");
    } else {
        console.log("Single Type");
    }
}

// Example usage:
const basket1 = ["apple", "banana", "orange"];
const basket2 = ["apple", "apple"];

checkBasket(basket1); // Output: Mixed Basket
checkBasket(basket2); // Output: Single Type
