// Functions Questions Practice

// Basics -> 1 - 10

// 1. Create a function named greet that prints "Hello World".

const greet = () => console.log("Hello World");
greet()


// 2. Create a function add(a, b) that returns the sum.

const add = (a, b) => a + b;
console.log(add(1, 2))


// 3. Write a function to calculate the square of a number.

const sq = a => a * a;
console.log(sq(10))


// 4. Create a function that checks whether a number is even or odd.

const checkOddOrEven = n => {
    return n % 2 == 0 ? "Even" : "Odd";
}
console.log(checkOddOrEven(10));
console.log(checkOddOrEven(5));


// 5. Write a function that converts Celsius to Fahrenheit.

const tempCelToFer = temp => ((9 / 5) * temp) + 32;
console.log(tempCelToFer(5));


// 6. Create a function with default parameter "Guest".

const welcome = (user = "Guest") => console.log(`Welcome, ${user}`)
welcome("Aditya");
welcome();


// 7. Write a function that returns the greater of two numbers.

const greaterNum = (a, b) => a >= b ? a : b;
console.log(greaterNum(10, 20))
console.log(greaterNum(10, 10))


// 8. Create a function to calculate area of rectangle.

const area = (l = 0, b = 0) => l * b;
console.log(area(10, 20))
console.log(area(10))


// 9. Write a function that returns "Adult" if age ≥ 18 else "Minor".

const checkAge = age => age >= 18 ? "Adult" : "Minor";
console.log(checkAge(18))
console.log(checkAge(10))
console.log(checkAge(20))


// 10. Create a function to reverse a string.

const revString = str => str.split("").reverse().join("");
console.log(revString("Aditya"))
console.log(revString("Hey There"))