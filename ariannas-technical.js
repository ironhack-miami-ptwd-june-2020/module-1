const people = [
  { name: 'bob', age: '21' },
  { name: 'mary', age: '17' },
  { name: 'jill', age: '35' },
  { name: 'jake', age: '52' }
];

// input: array of people
// return: name of oldest person
function oldestPerson1(arr) {
  let oldestName = '';
  let oldestAge = 0;
  arr.forEach(el => {
    if (el.age > oldestAge) {
      oldestName = el.name;
      oldestAge = el.age;
    }
  });
  return oldestName;
}

// oldestPerson1(people);

function oldestPerson2(arr) {
  const sorted = [...arr].sort((a, b) => b.age - a.age);
  return sorted[0].name;
}

// oldestPerson2(people)

// input: array of people
// return: average age
function averageAge(arr) {
  const sum = arr.reduce((acc, currVal) => acc + Number(currVal.age), 0);
  return sum / arr.length;
}

averageAge(people);
