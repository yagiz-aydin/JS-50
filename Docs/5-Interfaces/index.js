//Person constructor
function Person(name, email) {
  this.name = name;
  this.email = email;
}

//Teacher constructor
function Teacher(name, email, content) {
  Person.call(this, name, email);
  this.content = content;
}

//Send email given interface
function sendEmail(personInterface){
  const {email, name, content} = personInterface
  const send = () => alert(`${content} email sent to ${name} / ${email}`)
  send();
}

const person1 = new Person("John", "john@smith.com")
const person2 = new Person("Johanna", "johanna@smith.com", "Birthday")
const teacher1 = new Teacher("Ash", "ash@smith.com", "Welcome")

sendEmail(person1)
sendEmail(person2)
sendEmail(teacher1)