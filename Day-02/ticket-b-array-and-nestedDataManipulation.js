
// [🎫 TICKET B: CON-102 // NESTED MATERIALS CALCULATOR ENGINE]
// • Task: Open 'Day-02/ticket_b_nested.js' and write a function named
//         calculateTotalBricksRequired(jobsArray)
// • Requirements: Use the nested .reduce() pattern from yesterday to count 
//                 every brick across all sites (NO standard for/while loops allowed!).

// • Copy and Paste this Test Environment to the bottom of your file to run it:
// ---------------------------------------------------------------------------------
// const contractJobsLog = [
//     { site: "Site A", walls: [{ name: "Front", bricks: 1200 }, { name: "Side", bricks: 850 }] },
//     { site: "Site B", walls: [{ name: "Main", bricks: 3100 }] },
//     { site: "Site C", walls: [] } 
// ];

// console.log(`🧱 Total Bricks Required: ${calculateTotalBricksRequired(contractJobsLog)}`);
// // Target total to hit on terminal screen: 5150
// ---------------------------------------------------------------------------------

// =================================================================================
//        EXECUTION: Run files in Git Bash via 'node filename.js' to test!
// =================================================================================

const contractJobsLog = [
    { site: "Site A", walls: [{ name: "Front", bricks: 1200 }, { name: "Side", bricks: 850 }] },
    { site: "Site B", walls: [{ name: "Main", bricks: 3100 }] },
    { site: "Site C", walls: [] } 
];

function calculateTotalBricksRequired(jobsArray){
    // master loop sweeps through each driver object card
   return jobsArray.reduce((totalBricks, currentSide) => {

    // 2. Internal loop calculates the sub-total for THIS specific driver's orders
    const totalSideBricks = currentSide.walls.reduce((subtotal, item) => {
        return subtotal + item.bricks;
    }, 0);

    return totalBricks + totalSideBricks;

   }, 0);
}

console.log(`🧱 Total Bricks Required: ${calculateTotalBricksRequired(contractJobsLog)}`);
// Target total to hit on terminal screen: 5150