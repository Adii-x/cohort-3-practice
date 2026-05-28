// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.
// 2. Create a function `add(a, b)` that returns the sum.
// 3. Write a function to calculate the square of a number.
// 4. Create a function that checks whether a number is even or odd.
// 5. Write a function that converts Celsius to Fahrenheit.
// 6. Create a function with default parameter `"Guest"`.
// 7. Write a function that returns the greater of two numbers.
// 8. Create a function to calculate area of rectangle.
// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// 10. Create a function to reverse a string.


// Question 1 -

const greet = () => console.log("Hello World");

greet();

// Question 2 -

const add = (a, b) => a + b;

console.log(add(5, 6))

// Question 3 - 

const square = a => a * a;

console.log(square(5));

// Question 4 - 

const check = (num) => {
    if(num % 2 === 0) return "Even";
    return "Odd";
}

console.log(check(10));
console.log(check(1));

// Question 5 - 

const convert = (deg) => {
    
    let fahrenheitTemp = ((9 / 5) * deg) + 32;
    
    return fahrenheitTemp;

}

console.log(convert(5));

// Question 6 - 

const wel = (user = "Guest") => {
    console.log(`Welcome ${user}`);
}

wel("Adii")
wel()

// Question 7 - 

const max = (a, b) => {
    if(a > b) return a;
    return b;
}

console.log(max(10, 5));

// Question 8 - 

const area = (l, w) => {
    return l * w
}

console.log(area(10, 5));

// Question 9 - 

const ageCheck = (age) => {
    if(age >= 18) return "Adult"
    else return "Minor"
}

console.log(ageCheck(18))
console.log(ageCheck(1))

// Question 10 - 

const strRev = (str) => {
    return str.split("").reverse().join("");
}

console.log(strRev("Aditya"));