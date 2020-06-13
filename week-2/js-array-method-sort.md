## `.sort()`

- mutates the original array - to prevent it, make a copy (`const sorted = origArr.slice().sort()`) of the array and then sort the copy
- makes a specific order of elements
- returns array
- sorts by a string value (even if it's an array of numbers)

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_748fef67bc26e8fe7f011452c7a06545.png)

There's plenty of ways to sort arrays in JavaScript and using `.sort()` is probably one of the slowest ones, but it is important to understand it and how it works.

### Sorting numbers

- **Simple `.sort()`- sorts the values as strings in alphabetical and ascending order.**

Yes, that is correct - although they are numbers, they will be sorted as strings. This means (and we will see it very soon) that although `11` is greater than `2`, `11` will be sorted before `2` because "2" is bigger than "1". Because of this, the `.sort()` method will lead to incorrect result when sorting numbers.

Let's work on the following array:

```jsx
const unsorted = [1, 4, 2, 11, 42];
```

Now apply the `.sort()` on the `unsorted` array of numbers:

```jsx
unsorted.sort();
// [ 1, 11, 2, 4, 42 ] // <== sorted by string value!!!
```

Since we didn't make a _safe_ copy of the array, let's check what happened with the original array:

```jsx
console.log(`original: ${unsorted}`); // original: 1,11,2,4,42
```

Ups, it's sorted and we lost our original array. :cry:

Let's see how we would approach with a best-practices in place:

```jsx
const sorted1 = unsorted.slice().sort();

console.log(`sorted: ${sorted1}`); // sorted: 1,11,2,4,42

console.log(`original: ${unsorted}`); // original: 1,4,2,11,42
```

You can fix this by providing a _compare function_.

- **Using compare function with `.sort()`** - yeah, that's it :white_check_mark:

If we want to sort numbers in numerical order, we must include in the sort method one parameter: a compare function.

Let's get a new unsorted array:

```jsx
const randomNumbers = [3, 1, 9, 8, 42, 1221];
```

:up: **Sorting numbers ascending**

```jsx
const ascRandom = randomNumbers.slice().sort((a, b) => a - b);
console.log(`sorted asc: ${ascRandom}`); // sorted asc: 1,3,8,9,42,1221

console.log(`original: ${randomNumbers}`); // original: 3,1,9,8,42,1221
```

We can see that numbers are sorted in _ascending_ order and original array stayed untouched.

:arrow_double_down: **Sorting numbers descending**

We will use the same array, `randomNumbers`:

```jsx
const descRandom = randomNumbers.slice().sort((a, b) => b - a);

console.log(`sorted desc: ${descRandom}`); // orted desc: 1221,42,9,8,3,1

console.log(`original: ${randomNumbers}`); // original: 3,1,9,8,42,1221
```

#### How does the compare function work?

The compare function should return a negative, zero, or positive value, depending on the arguments.

Example:

When comparing 3 and 10, the `.sort()` method calls the compare function(3,10).

The function calculates 3-10 and returns -7 (a negative value).

The sort function will sort 3 as a value lower than 10.

### Sorting strings

Let's see how it works when we sort the strings. We will be demoing on the array of `words`:

```jsx
const words = ['Hello', 'great', 'First', 'A', 'a', 'how'];
```

:arrow_up: **Sorting strings ascending**

Now, let's make a copy of the array and apply the _simple `sort`_. This method applied without compare function will sort strings in ascending order.

_Note_: **The capitalized letters will come before lowercased ones.**

```jsx
const wordsAsc = words.slice().sort();

console.log(`words asc: ${wordsAsc}`); // words asc: A,First,Hello,a,great,how

console.log(`original words: ${words}`); // original words: Hello,great,First,A,a,how
```

To surpass this limitation, we should apply `.toLowercase()` on all words and then compare them:

```javascript
const properWordsSort = words.slice().sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 0;
  return a > b ? 1 : -1;
});

console.log(properWordsSort);
// [ 'A', 'a', 'First', 'great', 'Hello', 'Hello', 'how' ]
```

:arrow_down_small: **Sorting strings descending**

When in need to sort strings in descending order, we need to pass the following compare function (still working with the `words` array):

```jsx
const wordsDesc = words.slice().sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});

console.log(`words desc: ${wordsDesc}`); // words desc: how,great,a,Hello,First,A
console.log(`original words: ${words}`); // original words: Hello,great,First,A,a,how
```

### Example: Sorting by length

```javascript
const sortedByLength = words.slice().sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a.length === b.length) return 0;
});

console.log('---> ', sortedByLength);
// --->  ['A', 'a', 'how',   'Hello', 'Hello', 'great', 'First' ]
```

### Example with sorting by more than one condition

```javascript
const arr = [
  { title: 'Carrot', votes: 3 },
  { title: 'Milk', votes: 2 },
  { title: 'Banana', votes: 2 },
  { title: 'Apple', votes: 1 }
];

const byVotesAlphabetically = arr.slice().sort((a, b) => {
  if (a.votes > b.votes) return -1;
  if (a.votes < b.votes) return 1;
  if (a.title > b.title) return 1;
  if (a.title < b.title) return -1;
});
console.log(byVotesAlphabetically);

// [
//   { title: 'Carrot', votes: 3 },
//   { title: 'Banana', votes: 2 },
//   { title: 'Milk', votes: 2 },
//   { title: 'Apple', votes: 1 }
// ]
```

### Extra resources

- [W3Schools: JavaScript Array sort() Method](https://www.w3schools.com/jsref/jsref_sort.asp)
- [StackOverflow: How does JavaScript's sort() work?](https://stackoverflow.com/questions/1494713/how-does-javascripts-sort-work)
