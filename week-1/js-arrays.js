// ******************************************************************************************
// PART 1 (DECLARATION, INDEX, ADD, REMOVE)
// ******************************************************************************************

// EXAMPLES OF ARRAYS
const animals = ['dog', 'cat', 'fish'];
const mixedArr = [3, 'fish', true, [], { name: 'sandra' }, '', null, ['table', 'chair']];

// arrays are zero indexed
// arrays have the "length" property. it equals (index + 1)

// ADD elements to array
// .push() adds elements to the end of the array - mutates the original array

animals.push('tiger');
console.log(animals); // [ 'dog', 'cat', 'fish', 'tiger' ]

// .unshift() adds elements to the beginning of the array  - mutates the original array

animals.unshift('monkey');
console.log(animals); // [ 'monkey', 'dog', 'cat', 'fish', 'tiger' ]

// inserts an element at a specified index
animals.splice(2, 0, 'horse');
console.log(animals); // [ 'monkey', 'dog', 'horse', 'cat', 'fish', 'tiger' ]

// ADD some and REMOVE some
animals.splice(3, 2, 'lion'); // removes cat and fish and replaces them with lion
console.log(animals); // [ 'monkey', 'dog', 'horse', 'lion', 'tiger' ]

// REMOVE elements from array
// .splice() remove element at specified index  - mutates the original array
animals.splice(2, 1);
console.log(animals); // [ 'monkey', 'dog', 'lion', 'tiger' ]

// .pop() - remove last element - mutates the original array
animals.pop();
console.log(animals); // [ 'monkey', 'dog', 'lion' ]

// shift() - remove the first elem - mutates the original array
animals.shift();
console.log(animals); // [ 'dog', 'lion' ]

// ******************************************************************************************
// PART 2 (ITERATING OVER ARRAYS AND EMPHASIZING THE NEED TO MAKE A COPY OF AN ARRAY)
// ******************************************************************************************

// ITERATING OVER ARRAY USING FOR LOOP
for (let i = 0; i < mixedArr.length; i++) {
  console.log(`el: ${mixedArr[i]}`);
}

// ITERATING OVER ARRAY USING .forEach() METHOD
// to access each elem of the array on easier and cleaner way, we can use .forEach() method

// this is example of the 'old' syntax:
mixedArr.forEach(function (elem) {
  console.log(`The elem is: ${elem}`);
});

// this is ES6 way of doing the same as above (get rid of the word function and add => between () and {}
// => is explicit return! meaning you don't have to use return if there's only one line like in the example below
mixedArr.forEach(elem => console.log(`The elem is: ${elem}`));

// the example with {} (the same as above but using word return:
mixedArr.forEach(elem => {
  let statement = `This is elem: ${elem}`;
  return console.log(statement);
});

// DISCLAIMER: you really don't need to use return with console.log() but we used it for demonstration purposes
// as we progress through the course, you will learn when to use explicit return and when not to.
// for now, just keep in mind that there are two approaches

// to make a copy of an array, you can use
// 1. concat() - Creates a new array based on the elements in the current array. Original array is not altered. Also, it can accept any number of arguments which will be added at the end of the array.
const fruits = ['banana', 'plum'];
const fruitsUpdated = fruits.concat('peach');
console.log(fruits); // [ 'banana', 'plum' ]
console.log(fruitsUpdated); // [ 'banana', 'plum', 'peach' ]

// 2. slice() - Used with no parameters, it returns a copy of the original.
const fruitsCopy = fruits.slice();
console.log(fruits); // [ 'banana', 'plum' ]
console.log(fruitsCopy); // [ 'banana', 'plum' ]
console.log('----------------');
fruitsCopy.push('pineapple');
console.log(fruitsCopy); // [ 'banana', 'plum', 'pineapple' ]

// 3. spread operator
const originalArr = [1, 3, 5];
console.log(`originalArr: ${originalArr}`); // originalArr: 1,3,5
const copyOfOriginal = [...originalArr];
console.log(`copyOfOriginal: ${copyOfOriginal}`); // copyOfOriginal: 1,3,5

// 4. splice() - creates a copy but alters the original array. DON'T USE IT!!!
// read here for more:
// https://stackoverflow.com/questions/3978492/fastest-way-to-duplicate-an-array-in-javascript-slice-vs-for-loop/20547803

// why we would make a copy of an array?
// - because we want to preserve the original array and keep its original state
// and make all the changes in the copied array
