## `.reverse()`

- mutates the original array so needs to be cloned before applying `.reverse()` on it
- returns the array of the same size in reversed order

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_342504964a2dc1fc9ecea9a25421906e.png)

[Source](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php)

We will be working on the following array:

```jsx
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```

Let's first copy/clone array and then apply the `.reverse()` on it:

```jsx
console.log(`original: ${nums}`);
original: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9;

// .slice() makes a copy
const reversed = nums.slice().reverse();

console.log(`reversed: ${reversed}`); // reversed: 9,8,7,6,5,4,3,2,1,0

console.log(`original: ${nums}`);
original: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9;
```
