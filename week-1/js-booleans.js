if ('false') {
  console.log('this is truthy');
} else {
  console.log('this is so falsy');
}

// the same as above - no need for {} when one line condition:
if ('false') console.log('this is truthy');
else console.log('this is so falsy');

if (true || false) console.log('sooooo true');
else console.log('not really true');

// = -> assignment
// == -> compares just using value (loose or abstract equality)
// === -> compares both value and the type (strict equality)

let x = 5;
console.log(typeof x); // number
let y = '5';
console.log(typeof y); // string

console.log(`USING == : ${x == y}`);
console.log(`USING === : ${x === y}`); // ✅ ✅ ✅

let city = 'miami';
// we can not change the value
city[0] = 'M';
console.log(city); // miami

// we can re-assign the variable
city = 'mexico city';
console.log(city); // mexico city

console.log(true && false); // false
console.log(11 % 3 === 2); // true
console.log(false || true); // true
console.log(!true || false); // false
console.log(17 == '17'); // true
console.log(123 === '123'); // false

let statement = 'i love javascript!';
let subStr = statement.substr(2, 9);
console.log(subStr);
console.log(statement); // i love javascript!
