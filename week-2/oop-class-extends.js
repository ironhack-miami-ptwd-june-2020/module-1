// class {}
// new
// constructor()
// classes are named with caps letters


// const book = new Object();
// const products = new Array();

class Person {
  constructor(theName, theAge){
    this.name = theName;
    this.age = theAge;
    this.sayHappyBirthday = sayHappyBirthday;
  }

  getAge(){
    console.log(`${this.name} is ${this.age} years old.`)
  }

  greet(){
    console.log(`Hello!`);
  }

  getName(){
    console.log(`My name is ${this.name}.`);
  }
}

const anaPerson = new Person('Ana', 26);
// console.log(anaPerson);
anaPerson.getAge();
anaPerson.greet();
anaPerson.getName();


const tomasPerson = new Person('Tomas', 27);
// console.log(tomasPerson);
// tomasPerson.getAge();

tomasPerson.sayHappyBirthday()

function sayHappyBirthday() {
  console.log(`Happy Birthday, ${this.name}.`)
}


class Student extends Person {
  constructor(theName, theAge, theCourse){
    super(theName, theAge);

    this.course = theCourse;
  }

  complainAboutClass(){
    console.log('I wish the pace is slower ...');
  }

  graduate(howManyProjects){
    if(howManyProjects >=3) return { didGraduate: true, message: `${this.name} successfully graduated!` }
    else return { didGraduate: false, message: `Keep grinding my friend, you are almost there!` }
  }
}

const stefanStudent = new Student('stefan', 29, 'web dev');
stefanStudent.greet();
stefanStudent.getAge();

stefanStudent.complainAboutClass();
stefanStudent.graduate(3).message;

const sandraStudent = new Student('sandra', 35, 'ux');

sandraStudent.getName();

sandraStudent.graduate(2).message;

// console.log(stefanStudent);

console.log('-----------------------------');

console.log(`Is Stefan an instance of Person class? -> ${stefanStudent instanceof Person}`);
console.log(`Is Stefan an instance of Student class? -> ${stefanStudent instanceof Student}`);

console.log('-----------------------------');

console.log(`Is Ana an instance of Person class? -> ${anaPerson instanceof Person}`);
console.log(`Is Ana an instance of Student class? -> ${anaPerson instanceof Student}`);
