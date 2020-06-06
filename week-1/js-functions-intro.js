// ************************************************************************************************
// PART 1: FUNCTION DECLARATION, INVOKE A FUNCTION, NAMING A FUNCTION, PARAMETERS VS. ARGUMENTS, RETURN STATEMENT
// ************************************************************************************************

// create => function declaration
function printCoffeePrice() {
  console.log('Coffee price is 5.');
}

// call => invocation
printCoffeePrice();

function printSandwichPrice() {
  console.log('Sandwich price is 8.');
}

printSandwichPrice();

// Naming conventions:
// - name should be very descriptive and should express what the function does.
// - try to use verbs that describe actions (ex. getUsers)
// - name functions the same as variables using the camelCase
// - use a lowercase letter to begin the name (lowerCase(){}, NOT LowerCase(){})

// when declaring function => PARAMETER (placeholder(s))
// "price" we pass in the func declaration is a placeholder, it can be any word
function printProductPrice(price) {
  console.log(`Product price is: ${price}`);
}

// when calling the function => ARGUMENT (the real value)
// 19 is the real value we pass in
printProductPrice(19);

// THE RETURN STATEMENT
function printInfo(product, price) {
  return `${product} price is ${price}`;
  // console.log(`${product} price is ${price}`); // this doesn't exist for this function because it comes after the return
}

// printInfo("coffee", 7);
printInfo('sandwich', 17);
// printInfo("Eloquent JS", 19);
// printInfo("book2", 6.5);

// -- multiple return statements --
function printName(name) {
  if (name.length === 0) {
    return 'Please provide a valid name!';
  }
  return `Name is ${name}.`;
}

printName(''); // => Please provide a valid name!
printName('Lee'); // => Name is Lee.

// -- return multiple values
// functions can’t, by default, return multiple values. To surpass this limitation,
// you can pack return values into an object or array and return it.

// --- returns packed in the object
function getUser() {
  // info could come from an API

  const name = 'ana';
  const age = '32';

  return {
    name,
    age
  };
}
const userInfo = getUser();
console.log(`${userInfo.name}, ${userInfo.age} years`); // ana, 32 years

// --- returns packed in the array
function getFavorites(fav1, fav2, fav3) {
  const favorites = [fav1, fav2, fav3];
  return favorites;
}

const kevinsFavs = getFavorites('javascript', 'html', 'css');
console.log(kevinsFavs); // => [ 'javascript', 'html', 'css' ]

const lanasFavs = getFavorites('javascript', 'node', 'react');
console.log(lanasFavs); // => [ 'javascript', 'node', 'react' ]
