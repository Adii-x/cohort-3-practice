// Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
// 2. Convert the number `100` into a string.
// 3. Convert `"true"` into a boolean.
// 4. Check the output of:
    // - `"5" + 2`
    // - `"5" - 2`
    // - `true + 1`
    // 1. Create a variable with value `"123abc"` and convert it into a number.
    // 2. Use `parseInt()` on `"500px"`.

// Question 1 - Convert the string `"50"` into a number.

var number = "50";

console.log(number, typeof number);

number = (Number)(number);

console.log(number, typeof number);

// Question 2 - Convert the number `100` into a string.

var num = 100;

console.log(num, typeof num);

num = (String)(num);

console.log(num, typeof num);

// Question 3 - Convert `"true"` into a boolean.

var bool = "true";

console.log(bool, typeof bool);

bool = (Boolean)(bool);

console.log(bool, typeof bool);

// Question 4 - Check the output of:
            // - `"5" + 2`
            // - `"5" - 2`
            // - `true + 1`
            // 1. Create a variable with value `"123abc"` and convert it into a number.
            // 2. Use `parseInt()` on `"500px"`.

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

var charNum = "123abc";

console.log((Number)(charNum));

var size = "500px";

console.log(parseInt(size));