// =================================================================================
//                     DAY 04 JUNIOR DEVELOPER SPRINT BOARD
// =================================================================================

// [🎫 TICKET A: CON-105 // FINANCIAL QUOTE SAFETY SHIELD]
// • Task: Open 'Day-03/ticket_a_async_all.js' and write an asynchronous function 
//         named executeQuoteCalculation(slowFunction)
// • Requirements: Implement a full try/catch/finally async safe wall pattern:
//   1. Inside 'try': await the slowFunction and print the result to the console.
//   2. Inside 'catch': print "Calculation Engine Error Handled Safely".
//   3. Inside 'finally': ALWAYS print "System Log: Calculation instance closed".

// • Copy and Paste this Test Environment to the bottom of your file to run it:
// ---------------------------------------------------------------------------------
// // Test Helper Promise
// const slowFormula = () => new Promise(res => setTimeout(() => res("Calculated Price: R4500"), 1000));

// // Call your function and pass the slowFormula tool into it:
// executeQuoteCalculation(slowFormula);
// ----------------------------
const slowFormula = () => new Promise(res => setTimeout(() => res("Calculated Price: R4500"), 1000));

async function executeQuoteCalculation(slowFunction){
    try{
        const results = await slowFormula();
        console.log(results);
    }
    catch(error) {
        console.log('Calculation Engine Error Handled Safely');
    }
    finally{
        console.log("System Log: Calculation instance closed");
    }
} 
executeQuoteCalculation()