// CODE here for your Lambda Classes

/* Person

First we need a Person class. This will be our base-class
Person receives name age location gender all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props */

class Person {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// testing Person class
// const testPerson = new Person({
//   age: "26",
//   name: "Jordan",
//   location: "Palmdale",
//   gender: "Male"
// });
// console.log(testPerson.speak());

/* Instructor 

Now that we have a Person as our base class, we'll build our Instructor class.
Instructor uses the same attributes that have been set up by Person
Instructor has the following unique props:
specialty what the Instructor is good at i.e. 'redux'
favLanguage i.e. 'JavaScript, Python, Elm etc.'
catchPhrase i.e. Don't forget the homies
Instructor has the following methods:
demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}' */

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo() {
    return `Today we are learning about {subject}`;
  }
  grade() {
    return `${student.name} receives a perfect scrore on {subject}`;
  }
}

// testing Instructor class
const testInstructor = new Instructor({
  age: "26",
  name: "Jordan",
  location: "Palmdale",
  gender: "Male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});
console.log(testInstructor.demo("JavaScript"));
