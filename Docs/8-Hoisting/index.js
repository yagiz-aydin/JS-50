console.log(x)
// undefined
console.log(y)
/* 
ƒ y(){
    console.log("JS-50")
}
*/
console.log(y()) 
// JS-50
console.log(z)
// Error! Uncaught ReferenceError: z is not defined
console.log(a)
// Error! Uncaught ReferenceError: a is not defined

var x = 1;

function y(){
    console.log("JS-50")
}

const z = () => console.log("New-JS-50")

console.log(x)   // 1
console.log(y()) //JS-50
console.log(z()) //New-JS-50