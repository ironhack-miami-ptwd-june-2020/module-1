1. Create variables with your first name, last name and age.

```javascript
let firstName = 'alejandro';
let lastName = 'garcia';
let age = 27;
```

2. Make the first letters of your first and last name capitalized.

```javascript
let capFirstName = firstName.charAt(0).toUpperCase() + firstName.substring(1);
console.log(capFirstName); // Alejandro

let capLastName = lastName[0].toUpperCase() + lastName.slice(1);
console.log(capLastName); // Garcia
```

3. Concatenate your first and last name (after capitalizing them) to give your full name.

```javascript
let fullName = `${capFirstName} ${capLastName}`;

// other:
// let fullName = capFirstName + ' ' + capLastName;

console.log(fullName); // Alejandro Garcia
```

4. Use console.log() method to output the sentence with the following structure: `My name is __________ and I am _____.`

```javascript
console.log(`My name is ${fullName} and I am ${age}.`);
// My name is Alejandro and I am 27s.
```
