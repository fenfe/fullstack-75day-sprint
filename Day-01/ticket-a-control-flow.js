// The Mission:
//  Write a function named processOrder that accepts an orderObject. You must implement two 
//  explicit Guard Rails using early return statements:
//  1. If the orderObject is completely missing (null or undefined), print "Error: Invalid payload" and exit immediately.
//  2. If the order has an empty items list (items.length === 0), print "Error: Cart is empty" and exit immediately.
//  3. If it passes both rails, print "Success: Order sent to kitchen!".
let orderObject = []
function processOrder(orderObject){
// guard rail 1
    if(orderObject === null || orderObject === undefined){
        console.log("Error: Invalid payload!")
        return;
    }
// guard rail 2
        if(orderObject.items.length === 0 ){
            console.log("Error: Cart is empty");
            return;
        } 
            
        
        console.log("Success: Order sent to kitchen!")
        
    
}

// =================================================================
// 🧪 TEST ENVIRONMENT HAND-POURED DATA
// =================================================================

// Test Case 1: Testing Guard Rail 1 (Should print: "Error: Invalid payload")
// processOrder(null); 

// // Test Case 2: Testing Guard Rail 2 (Should print: "Error: Cart is empty")
// const emptyCart = { customer: "Refilwe", items: [] };
// processOrder(emptyCart);

// // Test Case 3: Testing Success Path (Should print: "Success: Order sent to kitchen!")
const goodCart = { customer: "Kagiso", items: ["Special Kota", "Chips"] };
processOrder(goodCart);