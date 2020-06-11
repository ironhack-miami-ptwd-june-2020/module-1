// ************************************************************************************************
// ARROW FUNCTIONS
// ************************************************************************************************

function multiply(num1, num2) {
  return num1 * num2;
}

const multiply1 = x => {
  // => if ony one parameter we don't need () around x
  /* something happens here*/
};

// ES6 - longer version:
const multiply1 = (x, y) => {
  return x * y;
};

// ES6 - shorter version:
const multiply1 = (x, y) => x * y; // if return is only one line, we don't have to use word "return" and we can skip curly braces since arrow function returns by default if used with no curly braces

multiply1(7, 2); // 14

// Benefits of arrow functions:
// Arrow syntax automatically binds `this` to the surrounding code’s context.
// The syntax allows an implicit return when there is no body block, resulting in shorter and simpler code.
// `=>` is shorter and simpler than regular function syntax.
