// JIRA Ticket ID: API-201
// System Component: Customer Account Verification Terminal

// A fake background database task that takes time to check a bank link
const verifyBankLink = () => new Promise(resolve => setTimeout(() => resolve("Account Connected Safely"), 1000));

async function verifyCustomerFunds() {
    // 🚧 STEP 1: Open your try safety shield
    try {
        console.log("Connecting to the banking secure gateway...");

        // 🚧 STEP 2: Use 'await' to run the slow 'verifyBankLink()' function 
        // and save its result inside a variable named 'statusResult'
        const statusResult = await verifyBankLink();
        


        // 🚧 STEP 3: Print your result out to the terminal screen
        console.log(`System Confirmation: ${statusResult}`);

    } 
    // 🚧 STEP 4: Set up your catch safety net block to catch errors
    catch (error) {
        console.log("Transaction Guard: Banking gateway connection failed.");
    }
}

// Fire the system execution engine
verifyCustomerFunds();



