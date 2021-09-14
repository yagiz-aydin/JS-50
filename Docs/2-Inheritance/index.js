//Create a Person
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

//Add greeting function on constructor's prototype.
Person.prototype.greeting = function () {
  alert("Hi! I'm " + this.name.first + ".");
};

//Now, Define a Teacher
function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}

//As a note, we could have done this. These are the same !
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

//Giving Teacher greeting function on constructor's prototype.
Teacher.prototype.greeting = function () {
  let prefix;
  if (this.gender === "male") {
    prefix = "Mr.";
  } else if (this.gender === "female") {
    prefix = "Ms.";
  } else {
    prefix = "Mx.";
  }
  alert(
    "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      "."
  );
};

//Try this example
let teacher1 = new Teacher(
  "John",
  "Smith",
  28,
  "male",
  ["basketball", "music"],
  "geometry"
);
teacher1.name.first; // Inherited from Person() constructor
teacher1.interests[0]; // Inherited from Person() constructor
teacher1.subject;
teacher1.greeting();
