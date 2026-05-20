// ## Operators

// 1. Add two numbers and print the result.
// 2. Find the remainder when 25 is divided by 4.
// 3. Find the square of a number using exponent operator.
// 4. Increment a variable using `++`.
// 5. Decrement a variable using `-`.
// 6. Use `+=` operator to increase a variable by 20.
// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// 8. Check if two values are strictly equal using `===`.
// 9. Compare `"10"` and `10` using both `==` and `===`.
// 10. Create two boolean variables and test `&&`, `||`, and `!`.


// Question 1 -

var a1 = 10, a2 = 20;

console.log(a1 + a2);

// Question 2 - 

console.log(25 % 4);

// Question 3 - 

var num = 2;

console.log(num ** 3);

// Question 4 - 

var i = 1;
i++;
console.log(i);

// Question 5 - 

var j = 10;
j--;
console.log(j);

// Question 6 - 

var num1 = 10;
num1 += 20;

console.log(num1);
 
// Question 7 - 

var n1 = 10;
var n2 = 20;

console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);

// Question 8 - 

var a = 10;
var b = 10;

console.log(a === b);

// Question 9 - 

var b1 = "10";
var b2 = 10;

console.log(b1 == b2);
console.log(b1 === b2);

// Question 10 -

var T = true;
var F = false;

console.log(T || F);
console.log(T && F);
console.log(!T);
console.log(!F);