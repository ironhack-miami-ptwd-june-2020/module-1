## `.filter()`

- doesn't mutate the original array
- returns a new array with only the elements that satisfy conditions (returns a new array of smaller size than original (subarray))

We will be working on the following array:

```jsx
const numbers = [3, 7, 9, 10, 12];
```

Let's use _.filter()_ to extract the numbers that are divisible with `3`.

```jsx
const filteredArr = numbers.filter(num => {
  if (num % 3 === 0) return num;
});
// filteredArr: 3,9,12

// and in one line, this would look like:

const filteredArr2 = numbers.filter(num => num % 3 === 0);
// filteredArr2: 3,9,12
```

Remember, anything we use the array methods for (_map_, _reduce_, _filter_, ...) can be done using `for` loop or `.forEach()` method. Let's see what is under the hood of the `.filter()` method:

```jsx
const filtered = [];
for (const num of numbers) {
  if (num % 3 === 0) filtered.push(num);
}

console.log(`filtered: ${filtered}`); // filtered: 3,9,12

// in one line:

const filtered2 = [];
numbers.forEach(num => (num % 3 === 0 ? filtered2.push(num) : null));

console.log(`filtered2: ${filtered2}`); // filtered2: 3,9,12
```
