// The Mission: 
// Write a function named calculateGrandTotal(itemsArray).
// The Constraint:
//  No for loops allowed! You must use the modern .reduce() method.

// JIRA Ticket ID: SHOP-602
// System Component: Storefront Revenue Calculator




const itemsArray = [
    { name: "Special Kota", price: 15, quantity: 2 }, // 45 * 2 = R90
    { name: "Can of Mix", price: 10, quantity: 3 }    // 15 * 3 = R45
];

function calculateGrandTotal(itemsArray){
    return itemsArray.reduce((acc, curr) => {
        let itemCost = curr.price * curr.quantity;
        let total = acc + itemCost;
        return total;
    }, 0);

}
// calculateGrandTotal(itemsArray)
// console.log(calculateGrandTotal(itemsArray)); 

// 🧪 HIGH-DENSITY OBJECT TRACKING PLAYGROUND
const mealOrder = [
    { dish: "Special Kota", calories: 950, portions: 1 },
    { dish: "Large Chips", calories: 500, portions: 2 }, // 500 * 2 portions!
    { dish: "Can of Mix", calories: 140, portions: 1 }
];

function calculateTotalCalories(foodArray) {
    // 🧠 Your Turn: Use .reduce() to multiply calories by portions 
   
    // and return the grand total of calories!
    return foodArray.reduce((acc, curr) => {
        // Type your object-grabbing logic here...
        let caloriePerMeal = curr.calories *curr.portions;
        let totalCalories = acc + caloriePerMeal;
        return totalCalories;
    }, 0);
}

console.log(`Total Calories: ${calculateTotalCalories(mealOrder)} kcal`);
// Target Output to hit: 2090 kcal


  

// =================================================================
// 🧪 TEST ENVIRONMENT HAND-POURED DATA
// =================================================================
// const sampleCart = [
//     { name: "Special Kota", price: 45, quantity: 2 }, // 45 * 2 = R90
//     { name: "Can of Mix", price: 15, quantity: 3 }    // 15 * 3 = R45
// ];

// const total = calculateGrandTotal(sampleCart);
// console.log(`Grand Total Calculated: R${total}`); // Should output: R135



