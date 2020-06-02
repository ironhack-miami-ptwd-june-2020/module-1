// 3 ways to create strings:
// double (""), single quotes ('') and backticks (``)

// backticks (``) --> template literals: strings that allow us to embed expressions in them

let name = 'Ana';
console.log(`Hello there, ${name}!`);
// ==> Hello there, Ana!

console.log(`${name} walks every day at least ${1 + 2} km.`);
// ==> Ana walks every day at least 3km.

const str = 'this is our test string';

// console.log(`This is the first letter: ${str[0]}`);
// the same as above ^^^^
// console.log("This is the first letter:", str[0]);
// the same as above ^^^^
// console.log("This is the first letter:" + str[0]);

str[0] = 'T';
console.log(`Is string changed: ${str}`); // Is string changed: this is our test string

let num = 3;
console.log(typeof num);
num += 11; // num = num + 11 // number
console.log(`num 1: ${num}`); // 14

num = '3'; // now our num is type of string so math operations will "fail"
console.log(typeof num); // string

// adding to a string => concatenation
num += '11'; // num = num + 11 => string
console.log(`Num 2: ${num}`); // 311

// length is not a method
console.log(`How long is this string: ${str.length}`); // 23

// ✅check if string includes substring or character:
// includes() ===> returns true or false
// indexOf() ===> returns the position where character is found or -1 if not found

console.log(`CHECK INCLUDES: ${str.includes('stri')}`); // true
console.log(`CHECK INDEXOF: ${str.indexOf('string ')}`); // -1 (false)
console.log(`CHECK INDEXOF: ${str.indexOf('string')}`); // 17 (false)

// ✅ access character in the string charAt(index)

console.log(str.charAt(0)); // t

// ‼️ string methods never mutate the string
// substring(start, end)
// substr(start, howManyFromStart)
// slice(start, end) and can accept negative numbers (counts from the last index)

let useSubstring0 = str.substring(5, 10); // we count from 0
console.log(useSubstring0); // is ou ==> the last is not included, meaning the "end" is not inclusive

let useSubstring = str.substring(5, 11);
console.log(useSubstring); // is our

let useSubstring1 = str.substring(-11, 5); // negative number is zero for substring(), so this is the same as (0, 5)

console.log(`hello: ${useSubstring1}`); // as if starts with zero ==> hello: this

let useSubstring2 = str.substring(5); // from this position all the way till the end of the string if we don't pass the end value
console.log(`What if we pass only start to substring: ${useSubstring2}`); // What if we pass only start to substring: is our test

let useSubstr = str.substr(5, 11);
console.log(useSubstr); // is our test

let useSubstr = str.substr(5, 9);
console.log(useSubstr); // is our te
let useSliceWithNegative = str.slice(-4);
console.log(useSliceWithNegative); // ring

// **************************************************
// - substring's parameters are reversible, as it will always use its smallest parameter value as the start index and largest value as the stop index.
// - substring will treat a negative start index as 0.
// - slice extracts from the end of the string if the starting index is negative.
// **************************************************

// startsWith() method - determines whether a string begins with the characters of a specified string,
// returns true or false as appropriate

const str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true

// ************************************************************

// endsWith() method - determines whether a string ends with the characters of a specified string
// returns true or false as appropriate. It’s also case-sensitive.

const str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be')); // false
console.log(str.endsWith('to be', 19)); // true
