// ************************************************************************************************
// FUNCTION EXPRESSION
// ************************************************************************************************

function printInfo(product, price) {
  return `${product} price is ${price}`;
}

// function expression (example 1)
const sandwich = printInfo('sandwich', 17);
console.log(`hello: ${sandwich}`);

const milk = printInfo('milk', 3);
console.log(`hello 1: ${milk}`);

console.log(`Name is: ${name}`); // Name is: undefined
var name = 'ana'; // with var variable is hoisted and can be used before it's declared. however, only declaration is hoisted, not the value itseld
// console.log(`the name is: ${theName}`);
// const theName = "jo"; // ReferenceError: name is not defined

multiply(4, 5); // we can call this function before it's declared
// ✅ function declaration (aka statement) is hoisted all the way to the top of the code doc
function multiply(num1, num2) {
  return num1 * num2;
}

// function expression (example 2)
// function expression - is a function without name stored in a variable

// addition(5, 6) // 🚫 this doesn't work since it's not hoisted 🚫
const addition = function (a, b) {
  return a + b;
};

// A function declaration is a named function and can be stored in a variable if needed.
// A function expression is an un-named (or so-called anonymous) function that is stored in the variable.
// Both can be reused throughout the code.
