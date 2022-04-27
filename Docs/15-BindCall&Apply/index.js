// First understand the concept of using keyword this

function Person(){
    this.showInfos = function(){
          console.log("This is a" + this.constructor.name + " object");
  }
}
const person = new Person();

person.showInfos();

// This is a Person object.

const obj1 = {
    number1: 10,
    number2: 20,
}
const obj2 = {
    number1: 30,
    number2: 50,
}
function addNumbers(num){
	console.log(this.number1 + this.number2 + num );
}

addNumbers(100);
// NaN

// How to use call
addNumbers.call(obj1,100);
// 130

addNumbers.call(obj2,100);
// 180

// How to use apply
addNumbers.apply(obj1,[100]);
// 130

addNumbers.apply(obj2,[100]);
// 180

// How to use apply
const copyFunc = addNumbers.bind(obj1);

console.log(copyFunc(30,40));
// 60