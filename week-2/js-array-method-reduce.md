## `.reduce()`

- doesn't mutate the original array
- returns a new variable that holds the 'sum' (which implies it is the type of _number_ in case when we are reducing numerical values)

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_59ca2a153e60cc79647c0bdc2ebd2dc6.png)
<small>[Source](https://macwright.org/2015/01/03/reduce-juice.html)</small>

We will be working on the array of `prices`:

```jsx
const prices = [4, 5, 6];
```

Let's write fake reduce using `for` loop or `.forEach()` method:

```jsx
let sum1 = 0;
prices.forEach(el => {
  return (sum1 += el);
});

console.log(sum1); // 15
```

Let's do the same as above using `.reduce()` method:

```jsx
const sum2 = prices.reduce((accum, currValue) => {
  return accum + currValue;
}, 0); // <== this 0 means that at the very beginning, sum iz zero

// this can be written in one line:
// const sum2 = prices.reduce((accum, currValue) => accum + currValue, 0);

console.log(sum2); // 15
```

In the previous example, we started with `sum = 0`. However, in case we want to start with some other numeric value, the only thing we have to do is to set it like in the example that follows:

```jsx
const sum3 = prices.reduce((accum, currValue) => {
  return accum + currValue;
}, 10); // <== this 10 means that at the very beginning, sum iz 10

// this can be written in one line:
// const sum3 = prices.reduce((accum, currValue) => accum + currValue, 10);

console.log(sum3); // 25
```

### Example with objects

Let's see how we can utilize `.reduce()` when we work with an array of objects.

```jsx
const products = [
  {
    name: 'candy',
    price: 11
  },
  {
    name: 'pen',
    price: 3
  },
  {
    name: 'tea',
    price: 4
  }
];

const theSum = products.reduce((accum, currValue) => {
  // console.log(currValue); / <== currValue represents each object. Using dot notation we can access to each property and get its value
  return accum + currValue.price;
}, 0);

// in one line:
// const theSum = products.reduce((accum, currValue) => accum + currValue.price, 0);

console.log(`theSum: ${theSum}`); // 18
```
