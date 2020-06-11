// 1: Calculate the total population in the given array (`data`):

const data = [
  {
    country: 'USA',
    pop: 340
  },
  {
    country: 'France',
    pop: 133
  },
  {
    country: 'Bosnia',
    pop: 5
  }
];

const totalPop = data.reduce((accum, currentValue) => accum + currentValue.pop, 0);

console.log(`totalPop:  ${totalPop}`); // totalPop:  478

// 2: Given a menu of foods and their calories, calculate the average number of calories for the entire list.

const menu = [
  { name: 'Carrots', calories: 150 },
  { name: 'Steak', calories: 350 },
  { name: 'Broccoli', calories: 120 },
  { name: 'Chicken', calories: 250 },
  { name: 'Pizza', calories: 520 }
];

const totalCalories = menu.reduce((acc, currValue) => acc + currValue.calories, 0);
const avgCalories = totalCalories / menu.length;

console.log(avgCalories); // => 278
