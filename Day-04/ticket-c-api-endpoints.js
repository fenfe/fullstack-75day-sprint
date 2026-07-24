
// [🎫 TICKET C: NODE-003 // CLIENT CONFIG EXPORTER HARDWARE SNAPSHOT]
// • Task: Open 'Day-03/ticket_c_api_endpoint.js' and write a Node script to save 
//         a text file directly to your laptop's hard drive.
// • Requirements: 
//   1. Import the built-in file system tool block using: require('fs').promises;
//  - Import Node's built-in file system tool (promises version)
        const fs = require('node:fs/promises');
//   2. Use the fs.writeFile() method to create a file named "client-config.txt".
    async function saveToHardDrive(){
        const textData = "Contactor ID: 9942 // Region: Local"
        try{
            await fs.writeFile('client-config.txt', textData, 'utf8');
            console.log('Success!')
        }
        catch(error){
            console.error('Failed to write file:', error)
        }
    }
    saveToHardDrive()
//   3. Inside that file, save the text data string: "Contractor ID: 9942 // Region: Local"

//   4. Wrap the file writing command inside an async function with try/catch to log success!

// =================================================================================
//        EXECUTION: Run files in Git Bash via 'node filename.js' to test!
// =========================================================
