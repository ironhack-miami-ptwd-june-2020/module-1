// CHECK TYPE OF ARRAY

const students = ['ana', 'ivan'];
const name = 'sandra';

console.log(typeof students); // object
console.log(Array.isArray(students)); // true

console.log(Array.isArray(name)); // false

if (Array.isArray(name)) console.log(`Thank you for submitting students list!`);
else console.log(`Please submit valid data! Add list of your students.`);
