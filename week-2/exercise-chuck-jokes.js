// TODO: write the methods getAge, addJoke and getRandomJoke

const chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  jokes: [
    'Chuck Norris counted to infinity... Twice.',
    'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'
  ],
  displayInfo() {
    console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
  },
  getAge() {
    return Math.floor((new Date() - this.birthDate) / 1000 / 60 / 60 / 24 / 365.25);
    // return new Date().getFullYear() - this.birthDate.getFullYear();
  },
  addJoke(blah) {
    this.jokes.push(blah);
  },
  getRandomJoke() {
    let randomIndex = Math.floor(Math.random() * this.jokes.length);
    return this.jokes[randomIndex];
  }
};

chuck.displayInfo();

console.log('getAge', chuck.getAge());

chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();
