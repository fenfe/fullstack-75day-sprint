// JIRA Ticket: SHOP-603
//  — The Advanced Multi-Cart Aggregator

// The Real-World Context:
//  Kagiso has 3 different delivery drivers out in the field. Each driver has a list of orders 
//  they completed today. Your task is to calculate the grand total revenue collected across
//   the entire shop today.
// 11 - 18 - 21

// Your Mission:
//  Use nested .reduce() pipelines or a combination of .map() and .reduce() to
//   calculate the combined revenue of all orders across all drivers.

// The Constraints:
// 1. No for or while loops allowed.
// 2. Your code must handle an empty orders list safely without crashing or returning NaN.
// 3. Target revenue output to hit: R215.

// total cost per order
// let totalCostPerOrder = driversDayLog[0].orders[0].price * driversDayLog[0].orders[0].qty;
// JIRA Ticket ID: SHOP-603
// System Component: Multi-Cart Aggregator Engine

const driversDayLog = [
    { driver: "Thabo", orders: [{ price: 45, qty: 2 }, { price: 35, qty: 1 }] },
    { driver: "Sipho", orders: [{ price: 55, qty: 1 }, { price: 15, qty: 3 }] },
    { driver: "Lerato", orders: [] } // Guard Rail Test: This will safely evaluate to 0
];

function calculateTotalShopRevenue(logArray) {
    // 1. Master loop sweeps through each driver object card
    return logArray.reduce((masterTotal, currentDriver) => {
        
        // 2. Internal loop calculates the sub-total for THIS specific driver's orders
        const driverSalesTotal = currentDriver.orders.reduce((subTotal, item) => {
            return subTotal + (item.price * item.qty);
        }, 0);

        // 3. Add this driver's calculated sales straight to the master shop pool
        return masterTotal + driverSalesTotal;

    }, 0); // Master accumulator starts at 0 revenue
}

const finalRevenue = calculateTotalShopRevenue(driversDayLog);
console.log(`💵 Total Shop Revenue for Today: R${finalRevenue}`);


// total cost per driver
// let totalPerDriver = driversDayLog[0].orders.totalCostPerOrder[0] + driversDayLog[0].orders.totalCostPerOrder[1];
// console.log(totalPerDriver)
// total cost for all drivers


// console.log(totalPerDriver)
// console.log(driversDayLog[0].orders[0].price)

