function sayHello(name) {
    alert('Hello ' + name);
}
  
function userInput(callback) {
    const name = prompt('What is your name?');
    return callback(name);
}
  
userInput(sayHello);

// setTimeout is a callback function, function has a inner function

setTimeout(function(){
    console.log("Hello after 5 sec")
}, 5000)