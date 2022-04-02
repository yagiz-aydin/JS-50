console.log(a)
// Error! Uncaught ReferenceError: a is not defined
console.log(b)
// Error! Uncaught ReferenceError: b is not defined
console.log(c)
// undefined

let a = 1;
const b = 2;
var c = 3;

a = 2;
// a = 2 
b = 3;
// Error! Uncaught TypeError: Assignment to constant variable.
c = 4
// c = 4

// let & const storing in a lexical scope not !Global
console.log(window.a)
// undefined
console.log(window.b)
// undefined
console.log(window.c)
// 4


/* 

 * var 
The scope of a var variable is functional scope.
It can be updated and re-declared into the scope.	
It can be declared without initialization.
It can be accessed without initialization as its default value is “undefined”.

 * let
The scope of a let variable is block scope.	
It can be updated but cannot be re-declared into the scope.
It can be declared without initialization.
It cannot be accessed without initialization, as it returns an error.

 * const 
The scope of a const variable is block scope.
It cannot be updated or re-declared into the scope.
without initialization.	It cannot be declared without initialization.
It cannot be accessed without initialization, as it cannot be declared without initialization.

*/
