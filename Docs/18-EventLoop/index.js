// Please follow the link jsv9000.app for understand the tasks priority

console.log("JS-50")
Promise.resolve(() => console.log("LEARNING IS")).then(res => res()) // Microtask Queue
setTimeout(() => console.log("FUN"), 0) // Task Queue
console.log("AMAZING")

// JS-50
// AMAZING
//** On Callstack priority order is Microtask Queue > Task Queue 
// LEARNING IS
// FUN
