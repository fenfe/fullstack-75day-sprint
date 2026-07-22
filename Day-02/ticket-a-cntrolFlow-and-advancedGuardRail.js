// =================================================================================
//                     DAY 02 JUNIOR DEVELOPER SPRINT BOARD
// =================================================================================

// [🎫 TICKET A: CON-101 // CONTRACTOR DIMENSIONS GUARD RAILS]
// • Task: Open 'Day-02/ticket_a_guards.js' and write a function named
//         validateProjectDimensions(dimensionsObject)

// • Requirements: Implement 2 strict early-return guard rails (NO 'else' blocks):
//   1. If dimensionsObject is missing (null/undefined), print:
//      "Error: Missing dimensions payload" and exit.
//   2. If wallLength or wallHeight inside the object is <= 0 or missing, print:
//      "Error: Dimensions must be positive numbers" and exit.
//   3. If safe, print: "Success: Dimensions validated for calculation engine!"

// • Copy and Paste this Test Environment to the bottom of your file to run it:
// ---------------------------------------------------------------------------------
// // Test Cases
// validateProjectDimensions(null); 
// validateProjectDimensions({ wallLength: -5, wallHeight: 3 }); 
// validateProjectDimensions({ wallLength: 10, wallHeight: 3 });
// ---------------------------------------------------------------------------------

function validateProjectDimensions(dimensionsObject) {
    if(dimensionsObject === null || dimensionsObject === undefined){
        console.log("Error: Missing dimensions payload ")
        return;
    }
    if(dimensionsObject.wallLength <= 0 || dimensionsObject.wallHeight <= 0 ){
        console.log("Error: Dimensions must be positive numbers ")
        return;
    }
    return console.log("Success: Dimensions validated for calculation engine")
}
validateProjectDimensions({wallLength: 10, wallHeight: 3});