// ***************************************************************
// 1: Capitalize each element of the array - the whole word:
// ***************************************************************

const fruits = ['pineapple', 'orange', 'mango'];

const capsFruits = fruits.map(oneFruit => {
  return oneFruit.toUpperCase();
});

// we can write it in one line:
// const capsFruits = fruits.map(oneFruit => oneFruit.toUpperCase())
//
console.log(`fruits: ${fruits}`); // fruits: pineapple,orange,mango
console.log(`capsFruits: ${capsFruits}`); // capsFruits: PINEAPPLE,ORANGE,MANGO

// ***************************************************************
// 2: Capitalize the first letter of every city. <br>
// _Bonus_: if the city has 2 or more words in the name, capitalize the first letter of each word.
// ***************************************************************

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capsCities = cities.map(city => {
  if (city.includes(' ')) {
    let splitted = city.split(' ');
    const len = splitted.length;
    for (let i = 0; i < len; i++) {
      splitted[i] = splitted[i][0].toUpperCase() + splitted[i].slice(1);
    }
    return splitted.join(' ');
  }
  return city[0].toUpperCase() + city.slice(1);
});

console.log(capsCities);
// [ 'Miami',
// 'Barcelona',
// 'Madrid',
// 'Amsterdam',
// 'Berlin',
// 'Sao Paulo',
// 'Lisbon',
// 'Mexico City',
// 'Paris' ]
