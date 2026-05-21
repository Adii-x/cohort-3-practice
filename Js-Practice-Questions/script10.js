// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// 2. Check whether age is above 18 using ternary operator.
// 3. Find the greater number between two values using ternary operator.

// Question 1 - 

var num = 2;

console.log(num % 2 == 0 ? "Even" : "Odd");

// Question 2 - 

var age = 18;

console.log(age >= 18 ? "Above 18" : "Below 18");

// Question 3 -

var a1 = 10, a2 = 2;

console.log(a1 > a2 ? `${a1} is greater then ${a2}` : `${a1} is smaller then ${a2}`)