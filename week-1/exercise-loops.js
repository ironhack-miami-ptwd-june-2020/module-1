// Use any loop. Given the iterable let str='hello,dear.friend! nice,to.see you!',
// replace each dot and comma with space. The final output should be: hello dear friend! nice to see you!.

let str = 'hello,dear.friend! nice,to.see you!';

// version 1:
let newStr = '';
for (let char of str) {
  if (char === '.' || char === ',') {
    char = ' ';
  }
  newStr += char;
}
console.log(newStr); // hello dear friend! nice to see you!

console.log('----------------------------------------------------');

// version 2:
let stringy = '';
for (let i = 0; i < str.length; i++) {
  if (str[i] === '.' || str[i] === ',') {
    stringy += ' ';
  } else {
    stringy += str[i];
  }
}
console.log(stringy); // hello dear friend! nice to see you!

console.log('----------------------------------------------------');

// version 3:

for (let i = 0; i < str.length; i++) {
  if (str[i] === ',' || str[i] === '.') {
    str = str.substr(0, i) + ' ' + str.substr(i + 1);
  }
}

console.log(str); // hello dear friend! nice to see you!
