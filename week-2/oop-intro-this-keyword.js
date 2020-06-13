// declaring object

// object literal
const product = {
  name: 'iphone',
  price: 799.99
};
// console.log(product);

// using the 'new' keyword
const book = new Object();
book.title = 'ana karenina';
book.author = 'leo tolstoy';
// console.log(book);

const person = {
  name: 'alex',
  age: 30,
  greet: function () {
    console.log('Hello!');
  },
  getName: function () {
    // console.log(this);
    console.log(`My name is ${this.name}.`);
  },
  // sayHappyBirthday: function(){
  //   // console.log('this inside sayHappyBirthday: ', this)

  // --> if we don't use arrow function we have to save the context of sayHappyBirthday() method into
  // new variable (we call it "that") so we can pass this variable down to setInterval() method and use its context there
  //   let that = this;

  //   setInterval(function() {
  //     // console.log('this inside setInterval: ', this);
  //     // console.log('this inside setInterval: ', that)

  //     console.log(`Happy Birthday! You are now ${that.age += 1}.`);

  //   }, 1000)
  // },
  sayHappyBirthday: function () {
    // console.log('this inside sayHappyBirthday: ', this)

    setInterval(() => {
      // console.log('this inside setInterval: ', this);

      console.log(`Happy Birthday! You are now ${(this.age += 1)}.`);
    }, 1000);
  }
};

console.log(person.name);
person.greet();
person.getName();
person.sayHappyBirthday();
