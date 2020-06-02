// OBJECTS

const student = {
  firstName: 'mikayla',
  lastName: 'castro',
  bootcamp: 'web dev',
  favorites: ['js', 'html'],
  isCareerChanger: true
};

// GET A VALUE OF A SPECIFIC KEY IN AN OBJECT:
console.log(student.firstName); // => mikayla

// we will not use this but it exists!
console.log(student['bootcamp']); // => web dev

// ADD KEY AND VALUE
// we use dot notation to ADD property to an object and we use "=" to give it corresponding value
student.year = 2019;

console.log('after 1: ', student);
// => { firstName: 'mikayla',
//      lastName: 'castro',
//      bootcamp: 'web dev',
//      favorites: ['js', 'html'],
//      isCareerChanger: true,
//      year: 2019 }

// DELETE OBJECT PROPERTY (AND CORRESPONDING VALUE)
delete student.bootcamp;

console.log('after 2: ', student);
// => { firstName: 'mikayla',
//      lastName: 'castro',
//      favorites: ['js', 'html'],
//      isCareerChanger: true,
//      year: 2019 }

// UPDATE EXISTING OBJECT PROPERTY WITH A NEW VALUE
student.year = 2020;

console.log('upd year: ', student.year); // => 2020

// LIST OBJECT KEYS
const objKeys = Object.keys(student);
console.log('objKeys => ', objKeys); // =>  [ 'firstName', 'lastName', 'favorites', 'isCareerChanger', 'year' ]

// LIST OBJECT VALUES
const objValues = Object.values(student);
console.log('objValues => ', objValues); // =>  [ 'mikayla', 'castro', [ 'js', 'html' ], true, 2019 ]

// for ... in loop - special case of for loop that we can use to list all the object properties:

for (let key in student) {
  console.log(key);
}
// firstName
// lastName
// favorites
// isCareerChanger
// year

// CHECK DOES PROPERTY EXIST IN AN OBJECT
console.log('firstName' in student); // => true
