// Please follow the link jsv9000.app for understand the tasks priority

console.log("JS-50")
setTimeout(() => console.log("LEARNING IS"), 0) // Task Queue
Promise.resolve(() => console.log("FUN")).then(res => res()) // Microtask Queue
console.log("AMAZING")

// JS-50
// AMAZING
//** On Callstack priority order is Microtask Queue > Task Queue 
// LEARNING IS
// FUN
