# JS-50 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

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