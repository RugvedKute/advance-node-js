/* Syncronous -> Next Tick -> Micro task -> Macro Task -> Input/Output -> Cpu extensive */

const fs = require("fs");
const crypto = require("crypto");

console.log("1. script start");

setTimeout(() => {
  console.log("2. SetTimeout operation (macro task) 0 timeout");
}, 0);

setTimeout(() => {
  console.log("3. SetTimeout operation (macro task) 0 timeout");
}, 0);

setImmediate(() => {
  console.log("4. setImmediate operation (macro task)");
});

Promise.resolve().then(() => {
  console.log("5 Promise (microtask)");
});

process.nextTick(() => {
  console.log("6 Process Next Tick (microtask)");
});

fs.readFile(__filename, () => {
  console.log("7. Read Input Output operation");
});

crypto.pbkdf2("secret", "salt", 10000, 64, "sha256", (err, key) => {
  console.log("8. Crypto CPU extensive operation");
});

console.log("9. Script Ends");

/* Output
1. script start
9. Script Ends
6 Process Next Tick (microtask)
5 Promise (microtask)
2. SetTimeout operation (macro task) 0 timeout
3. SetTimeout operation (macro task) 0 timeout
4. setImmediate operation (macro task)
7. Read Input Output operation
8. Crypto CPU extensive operation

*/
