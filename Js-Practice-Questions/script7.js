// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

// Question 1 -

var num = 4.7;

console.log(Math.round(4.7));

// Question 2 - 

var num2 = 81;

console.log(Math.sqrt(81));

// Question 3 - 

console.log(Math.max(10, 20, 5, 99));

// Question 4 - 

console.log(Math.floor(Math.random() * 10 + 1));

// Question 5 - 

var num3 = 99.99;

console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));

// Question 6 - 

var num4 = 25;

console.log(typeof num4 === "number");

// Question 7 - 

var num5 = Math.PI;

console.log(num5.toFixed(2));