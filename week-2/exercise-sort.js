// **********************************************************************
// 1: Sort an array from shortest string to the longest.
// **********************************************************************

const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

const sortedByLength = arrOfStrings.slice().sort((x, y) => {
  if (x.length < y.length) return -1;
  if (x.length > y.length) return 1;
  return 0;
});

console.log(sortedByLength); // => [ 'yo', 'cat', 'wolf', 'animal' ]
console.log(arrOfStrings); // => [ 'cat', 'wolf', 'yo', 'animal' ]

// **********************************************************************
// 2: Sort an array alphabetically.
// **********************************************************************

const sortedAlphabetically = arrOfStrings.slice().sort((x, y) => {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
});

console.log(sortedAlphabetically); // => [ 'animal', 'cat', 'wolf', 'yo' ]
console.log(arrOfStrings); // => [ 'cat', 'wolf', 'yo', 'animal' ]

// **********************************************************************
// 3: Sort the objects in the array by age, in descending order.
// **********************************************************************

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];

const sortedByAgeDesc = people.slice().sort((x, y) => {
  if (x.age > y.age) return -1;
  if (x.age < y.age) return 1;
  return 0;
});

console.log(sortedByAgeDesc);

// [ { name: 'Allen', age: 49 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Candice', age: 25 },
//   { name: 'Nettie', age: 21 },
//   { name: 'Bill', age: 19 },
//   { name: 'Stuart', age: 17 } ]
