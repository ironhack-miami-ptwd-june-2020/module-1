const favorites = ['javascript', 'html', 'css'];

// remove first element
favorites.shift();
console.log(favorites); // => [ 'html', 'css' ]

// remove last element
favorites.pop();
console.log(favorites); // => [ 'html' ]

// add 'react' on the first place
favorites.unshift('react');
console.log(favorites); // => [ 'react', 'html' ]

// add 'node' to the last place
favorites.push('node');
console.log(favorites); // => [ 'react', 'html', 'node' ]

// remove element in the position 2 and add 'express'
favorites.splice(1, 1, 'express');
console.log(favorites); // => [ 'react', 'express', 'node' ]

// remove elements in the positions 2 and 3 and add 'mongodb'
favorites.splice(1, 2, 'mongodb');
console.log(favorites); // => [ 'react', 'mongodb' ]
