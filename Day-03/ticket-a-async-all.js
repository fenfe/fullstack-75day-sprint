// =================================================================================
//                     DAY 03 JUNIOR DEVELOPER SPRINT BOARD
// =================================================================================

// [🎫 TICKET A: CON-103 // CONTRACTOR MULTI-SITE ESTIMATOR (PARALLEL ASYNC)]
// • Task: Open 'Day-03/ticket_a_async_all.js' and write an asynchronous function 
//         named aggregateProjectLogs()
// • Requirements: 
//   1. Open a clean, non-crashing try/catch safety shield wrapper.
//   2. Use Promise.all() to run both slow background file functions provided below 
//      in PARALLEL (at the exact same time) instead of waiting sequentially.
//   3. Deconstruct the final resulting array parameters and console.log the messages.

// • Copy and Paste this Environment framework into your file to run your solution:
// ---------------------------------------------------------------------------------
// // Simulation of two background server calculations taking time
// const fetchSiteAEstimates = () => new Promise(res => setTimeout(() => res("Site A bricks: 1200"), 1500));
// const fetchSiteBEstimates = () => new Promise(res => setTimeout(() => res("Site B bricks: 3100"), 1000));

// async function aggregateProjectLogs() {
//     // 🧠 Your Turn: Open try/catch and use Promise.all to run both functions concurrently!
// }

// aggregateProjectLogs();
// successful task takes 2.5minutes together
const fetchSiteAEstimates = () => new Promise(res => setTimeout(() => res("Site A bricks: 1200"), 1500));
const fetchSiteBEstimates = () => new Promise(res => setTimeout(() => res("Site B bricks: 3100"), 1000));

 async function aggregateProjectLogs() {
    try {
        // make user aware that task is running
        console.log("checking files ...");
         // Promise.all kicks off all three timers simultaneously
        const [siteAresults, siteBresults] = await Promise.all([fetchSiteAEstimates(), fetchSiteBEstimates()]);
        // let him know data is here and give ti tohim
        console.log(`Site 1 Report :${siteAresults} `);
        console.log(`Site 2 Report :${siteBresults} `);

    }
    catch (error) {
        // if something goes wrong let him know
        console.log("Cannot read files", error);
    }
}
aggregateProjectLogs();



