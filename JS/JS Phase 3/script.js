// JS phase 3 - https://app.notion.com/p/JavaScript-Practice-Task-Beginner-Friendly-371aa7c5a79e800ea4ccda9db95774bb

// Part 1: Variables, Functions & Conditions

// Question 1 -

const add = (a, b) => a + b;
console.log(add(10, 5));


// Question 2 -

const square = a => a * a;
console.log(square(3));


// Question 3 - 

const evenOddCheck = a => a % 2 === 0 ? "Even" : "Odd";
console.log(evenOddCheck(10))
console.log(evenOddCheck(5))

 
// Question 4 -

const max = (a, b) => a > b ? a : b;
console.log(max(10, 5))
console.log(max(10, 50))


// Question 5 -

const isEligible = age => age >= 18 ? "Eligible" : "Not Eligible";
console.log(isEligible(18))
console.log(isEligible(10))
console.log(isEligible(20))


// Part 2: Loops

// Quesiton 1 -

for(let i = 1; i <= 50; i++) console.log(i);


// Question 2 -

for(let i = 1; i <= 100; i++) i % 2 === 0 ? console.log(i) : undefined;


// Question 3 - 

let sum = 0;

for(let i = 1; i <= 100; i++) sum += i;

console.log("Sum -", sum)


// Question 4 - 

const table = num => {
    for(let i = 1; i <= 10; i++){ 
        console.log(`${num} X ${i} = ${num * i}`)
    }
}

table(5)


// Question 5 - 

const countDigit = num => {
    console.log(JSON.stringify(num).split('').length);
}

countDigit(5)


// Part 3: Strings

// Question 1 -

const reverseString = str => {
    console.log(str.split('').reverse().join(''))
}

reverseString("hello")