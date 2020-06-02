const ironhacker = {
  firstName: 'marko',
  age: 39,
  favorites: ['JavaScript', 'Node'],
  isSatisfied: true,
  worksAt: 'Google',
  isRemote: false
};

// 1: Add 'React' as one more favorite tech
ironhacker.favorites.push('React');

// 2: Update ironhacker's age to 29
ironhacker.age = 29;

// 3: Remove the 'isRemote' property
delete ironhacker.isRemote;

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
ironhacker.didGraduate = true;

// 5 list all keys of the ironhacker object
for (const key in ironhacker) {
  console.log(key);
}

// 6. check if ironhacker has property 'worksAt'
console.log('worksAt' in ironhacker);
