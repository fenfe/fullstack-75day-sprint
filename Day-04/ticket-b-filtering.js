
// [🎫 TICKET B: CON-106 // WASTE MATERIAL FILTER PIPELINE]
// • Task: Open 'Day-03/ticket_b_filtering.js' and write a function named 
//         extractPremiumMaterials(materialsArray)
// • Requirements: Use the modern .filter() array method to scan the database.
//                 Return a brand-new array containing ONLY objects where the 
//                 quality is exactly "Premium" (NO standard loops allowed!).

// • Copy and Paste this Test Environment to the bottom of your file to run it:
// ---------------------------------------------------------------------------------
const stockInventory = [
    { name: "Face Bricks", cost: 8, quality: "Premium" },
    { name: "Plaster Sand", cost: 450, quality: "Standard" },
    { name: "River Sand", cost: 600, quality: "Premium" }
];

// console.log(extractPremiumMaterials(stockInventory));
// // Target Output Array to print: 
// // [ { name: 'Face Bricks', cost: 8, quality: 'Premium' }, { name: 'River Sand', cost: 600, quality: 'Premium' } ]
// -----------------------------------------------------------------------

function extractPremiumMaterials(materialsArray){
    // 🚧 GUARD RAIL: Check if array is completely missing or empty
    if (!materialsArray || materialsArray.length === 0) {
      return [];
  }
  const Premium = materialsArray.filter((item) => item.quality === "Premium");
  return Premium;
}
extractPremiumMaterials(stockInventory)

console.log(extractPremiumMaterials(stockInventory));