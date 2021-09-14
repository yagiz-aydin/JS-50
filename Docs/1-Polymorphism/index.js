//First write out the super class (Person)

function Person(age, weight) {
  this.age = age;
  this.weight = weight;
}

//And give Person the ability to share their information

Person.prototype.getInfo = function () {
  return (
    "I am " + this.age + " years old " + "and weighs " + this.weight + " kilo."
  );
};

//Next have a subclass of Person to Employee

function Employee(age, weight, salary) {
  this.age = age;
  this.weight = weight;
  this.salary = salary;
}
Employee.prototype = new Person();

//Override the behavior of getInfo by defining one which is more fitting to an Employee

Employee.prototype.getInfo = function () {
  return (
    "I am " +
    this.age +
    " years old " +
    "and weighs " +
    this.weight +
    " kilo " +
    "and earns " +
    this.salary +
    " dollar."
  );
};

//These can be used similar to your original code use

var person = new Person(50, 90);
var employee = new Employee(43, 80, 50000);

console.log(person.getInfo());
console.log(employee.getInfo());

/*However, there isn't much gained using inheritance
here as Employee's constructor is so similar to person's, 
and the only function in the prototype is being overridden.
the power in polymorphic design is to share behaviors.
*/
