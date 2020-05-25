// ******************************************************
// ****************** array of objects ******************
// ******************************************************

const students = [
  {
    firstName: 'Paola',
    lastName: 'Sanchez',
    bootcamp: 'Web Dev',
    favorites: ['JavaScript', 'HTML'],
    isCareerChanger: true
  },
  {
    firstName: 'Mila',
    lastName: 'Bjorn',
    bootcamp: 'Data Analytics',
    favorites: ['Python', 'SQL'],
    isCareerChanger: true
  },
  {
    firstName: 'Frank',
    lastName: 'Bellagio',
    bootcamp: 'UX',
    favorites: ['Sketch', 'InVision'],
    isCareerChanger: false
  }
];

console.log(students[1].firstName); // => Mila
console.log(students[0].isCareerChanger); // => true
console.log(students[2].firstName); // => Frank
console.log(students[2].favorites); // => [ 'Sketch', 'InVision' ]
console.log(students[0].favorites[0]); // => JavaScript

// loop over array of objects - example:

for (let i = 0; i < students.length; i++) {
  console.log(students[i].firstName);
}
// => Paola, Mila, Frank

// ******************************************************
// **************** array of arrays *********************
// ******************************************************

const developers = [
  ['ana', 'will', 'alex'],
  ['stefan', 'sandra', 'marcos'],
  ['jelena', 'andrei', 'arianna']
];

console.log(developers[0][0]); // => ana
console.log(developers[1][0]); // => sandra
console.log(developers[2][2]); // => arianna

// loop over array of arrays - example:

for (let i = 0; i < developers.length; i++) {
  console.log(developers[i][0]);
}
// => ana, stefan, jelena

// ******************************************************
// ********** object with nested objects  ***************
// ******************************************************

const classRoom = {
  teacher: {
    firstName: 'Greg',
    lastName: 'Dach',
    age: 38,
    address: {
      street: '1234 Happy Street',
      city: 'Miami',
      state: 'Florida'
    }
  }
};

console.log(classRoom.teacher.firstName); // <== Greg
console.log(classRoom.teacher.address.city); // <== Miami

// THE SAME RULES APPLY TO ADD/REMOVE ELEMENTS TO/FROM ARRAY (.push(), .pop(), etc.)
