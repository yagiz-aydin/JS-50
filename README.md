# JS-50 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

### Introduction 



### 1. Polymorphism

Polymorphism is the presentation of one interface for multiple data types. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/1-Polymorphism/index.js)

### 2. Inheritance

With most of the gory details of OOJS now explained, this article shows how to create "child" object classes (constructors) that inherit features from their "parent" classes. In addition, we present some advice on when and where you might use OOJS, and look at how classes are dealt with in modern ECMAScript syntax.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/2-Inheritance/index.js)

### 3. Encapsulation

Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/3-Encapsulation/index.js)

### 4. Singleton

The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton. [SOLID](https://en.wikipedia.org/wiki/SOLID) five design principles intended to make software designs more understandable, flexible, and maintainable. The principles are a subset of many principles promoted by <b>Robert C. Martin</b>.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/4-Singleton/index.js)

### 5. Interfaces

JavaScript uses what's called [duck typing](https://en.wikipedia.org/wiki/Duck_typing). If object has quack(), walk(), and fly() methods without requiring the implementation of some "Duckable" interface. The interface is exactly the set of functions that the code uses and the return values from those functions.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/5-Interfaces/index.js)

### 6. Closures

A [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/6-Closures/index.js)

### 7.  Global Execution Context (GEC) & Callstack

Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC). The [GEC](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes) is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.For every JavaScript file, there can only be one GEC.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/7-GEC&Callstack/index.js)


### 8. Hoisting

JavaScript [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/8-Hoisting/index.js)


### 9. DOM

The Document Object Model [(DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/9-DOM/index.html)

### 10. Let Const & Var 

In JavaScript, users can declare a variable using 3 keywords that are [var, let, and const](https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/). In this article, we will see the differences between the var, let, and const keywords. We will discuss the scope and other required concepts about each keyword. var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript. 

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/10-LetConstVar/index.js)

### 11. Promise & Await

The [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator is used to wait for a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). It can only be used inside an async function within regular JavaScript code. Await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/11-Promise&Await/index.js)

### 12. Garbage Collection

[Garbage Collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) is a form of automatic memory management. The garbage collector attempts to reclaim memory which was allocated by the program, but is no longer referenced—also called garbage. The majority of [Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) issues occur at this phase. The most difficult aspect of this stage is determining when the allocated memory is no longer needed.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/12-GarbageCollection/index.js)

### 13. Linked List

[A Linked List](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/) is a linear data structure similar to an array. Unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list as each element. (commonly called nodes) [How to implement Linked List ?](https://medium.com/geekculture/doubly-linked-lists-javascript-b13cc21ca59d)


[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/13-LinkedList/index.js)

### 14. Callback

A [callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), also known as a call-after function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

[Example with code](https://github.com/gaspetcan/JS-50/blob/main/Docs/14-Callback/index.js)

## 15. CORS
[CORS](https://enable-cors.org/server.html) stands for Cross-Origin Resource Sharing, also known a security mechanism built into (all) [modern web-browsers](https://enable-cors.org/client.html). The spec defines a set of headers that allow the browser and server to communicate about which requests are (and are not) allowed. CORS continues the spirit of the open web by bringing [API access](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) to all.

[For more details](https://github.com/gaspetcan/JS-50/blob/main/Docs/15-CORS/index.js)
