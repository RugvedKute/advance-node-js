// Allocate buffer
const buffer = Buffer.alloc(10);

// Convert String to buffer
const bufferString = Buffer.from("hellloooooo", "utf-8");

console.log(bufferString);

console.log(buffer);
