// CODE here for your Lambda Classes

/* Person

First we need a Person class. This will be our base-class
Person receives name age location gender all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props */

//Base-Class below //
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

// testing Person Base-class//
const jt = new Person({
  age: "26",
  name: "jt",
  location: "Palmdale",
  gender: "Male"
});
// console.log(jt.speak());
// console.log(jt.age);

const dj = new Person({
  age: "25",
  name: "dj",
  location: "Wyoming",
  gender: "Male"
});
// console.log(dj.speak());
// console.log(dj.age);

/* Instructors */
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect scrore on ${subject}`;
  }
}

//--- Testing Instructor class--- //
const Ryan = new Instructor({
  age: "35",
  name: "Ryan",
  location: "California",
  gender: "Male",
  favLanguage: "CSS",
  specialty: "Back-End",
  catchPhrase: `Try your best`
});

const Josh = new Instructor({
  age: "31",
  name: "Josh",
  location: "New Mexico",
  gender: "Male",
  favLanguage: "JS",
  specialty: "React.js",
  catchPhrase: `Don't Repeat Yourself`
});

// console.log(Ryan.specialty);
// console.log(Ryan.catchPhrase);
// console.log(Ryan.favLanguage);

// console.log(Josh.specialty);
// console.log(Josh.catchPhrase);
// console.log(Josh.favLanguage);

///----Students---- ///
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

//----Testing Student Objects---//
const Jordan = new Student({
  age: "26",
  name: "Jordan",
  location: "Palmdale",
  gender: "Male",
  previousBackground: "Operations",
  className: "WEBPT4",
  favSubjects: "JS"
});

const Jonathan = new Student({
  age: "26",
  name: "Jonathan",
  location: "New York",
  gender: "Male",
  previousBackground: "Accounting",
  className: "WEBPT4",
  favSubjects: "JS"
});

// console.log(Jordan.previousBackground);
// console.log(Jordan.className);
// console.log(Jordan.favSubjects);
// console.log(Jonathan.previousBackground);
// console.log(Jonathan.className);
// console.log(Jonathan.favSubjects);

//---- Project Managers----//

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, object) {
    `${this.name} debugs ${student.name}'s code on ${subject} `;
  }
}

//Testing Project Manager Objects//

const Gannon = new ProjectManager({
  age: "29",
  name: "Gannon",
  location: "Detroit",
  gender: "Male",
  favLanguage: "JavaScript",
  specialty: "React.js",
  catchPhrase: `How are we doing gents?`,
  gradClassName: "CS14",
  favInstructor: "Josh Knell"
});

const Carlos = new ProjectManager({
  age: "26",
  name: "Carlos",
  location: "North Carolina",
  gender: "Male",
  favLanguage: "JavaScript",
  specialty: "React.js",
  catchPhrase: `Let's Go!`,
  gradClassName: "CS12",
  favInstructor: "Ryan Hamblin"
});

// console.log(Gannon.favInstructor);
// console.log(Gannon.gradClassName);
// console.log(Carlos.favInstructor);
// console.log(Carlos.gradClassName);
