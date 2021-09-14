//Student is a encapsulation instanciate class
class Student {
  constructor() {
    let name;
    let marks;
  }
  //Accessing Student Name to get it
  getName() {
    return this.name;
  }
  //Accessing Student Name to set it
  setName(name) {
    this.name = name;
  }
  //Accessing Student Mark to get it
  getMarks() {
    return this.marks;
  }
  //Accessing Student Mark to set it
  setMarks(marks) {
    this.marks = marks;
  }
}
const student = new Student();
student.setName("John");
student.setMarks(80);
console.log(student.getName() + " " + student.getMarks());
