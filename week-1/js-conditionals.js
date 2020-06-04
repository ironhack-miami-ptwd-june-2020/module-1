// ************************************
// ********* if...else  ***************
// ************************************

// IF RETURN IS IN ONE LINE, YOU DON'T HAVE TO USE CURLY BRACES IN IF-ELSE:
const age = 20;
if (age >= 21) console.log("You can drink sir or ma'am! 🍻");
else console.log("You can't drink. Sorry! 🥤");

// ternary operator
true ? console.log('This is soooo true!') : console.log('This is false!');

// ❓❓ short students practice - to refactor first code snippet to ternary
age >= 21 ? console.log("You can drink sir or ma'am! 🍻") : console.log("You can't drink. Sorry! 🥤");

// EXAMPLE OF THE MOST EXCLUSIVE RULE MUST COME FIRST:

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FIZZBUZZ');
  else if (i % 3 === 0) console.log('FIZZ');
  else if (i % 5 === 0) console.log('BUZZ');
  else console.log(i);
}

// ************************************
// ************ switch  ***************
// ************************************

// amsterdam --> 9 characters
// barcelona --> 9 characters
// berlin --> 6 characters
// lisbon --> 6 characters
// madrid --> 6 characters
// mexico city --> 11 characters
// miami --> 5 characters
// paris --> 5 characters
// sao paulo --> 9 characters

const campus = 'sao ';
console.log(campus.length);

switch (campus.length) {
  case 5:
    console.log('This might be Miami or Paris');
    break;
  case 6:
    console.log('This is Berlin or Lisbon or Madrid');
    break;
  case 9:
    console.log('This is Amsterdam or Barcelona or Sao Paulo');
    break;
  case 11:
    console.log('This is Mexico City');
    break;
  default:
    console.log('Is there a new Ironhack campus opening? 🚀');
    break;
}
