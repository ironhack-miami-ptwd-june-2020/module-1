// 1: if version
// --------------------------------------------------------------------------------
const language = prompt('Please enter the language - (options: spanish, french, english): ');
const name = prompt('Please enter your name: ');

if (language === 'spanish') {
  // if we will have more than one thing to console or return we have to use curly braces
  console.log(`Hola, ${name}`);
  console.log('Something else');
} else if (language === 'french') console.log(`Salut, ${name}`);
else if (language === 'english') console.log(`Hello, ${name}`);
else console.log('I am not sure which language is that! Sorry! 🍺');

// 2: switch version
// --------------------------------------------------------------------------------
switch (language) {
  case 'spanish':
    console.log(`Hola, ${name}`);
    break;
  case 'french':
    console.log(`Salut, ${name}`);
    break;
  case 'english':
    console.log(`Hello, ${name}`);
    break;
  default:
    console.log('I am not sure which language is that! Sorry! 🍺');
}
