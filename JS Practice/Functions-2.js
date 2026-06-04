// Functions Questions Practice

// Intermediate -> 11 - 20

// 1. Write a function expression for multiplication.

const multiplication = (a, b) => a * b;
console.log(multiplication(10, 5));


// 2. Convert a normal function into an arrow function.

const multi = (a, b) => a * b;
console.log(multi(10, 5));


// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.

const sum = (...elems) => {
    let numSum = 0;
    for (const element of elems) {
        numSum += element
    }
    return numSum;
}
console.log(sum(1, 2, 3, 4, 5))


// 4. Write a function that counts vowels in a string.


const checkVowel = str => {
    
    let newStr = str.toLowerCase().trim();
    
    const vowels = 'aeiou';

    let count = 0;

    for (const element of newStr) {
        if(vowels.includes(element)) count++;
    }

    return count;

}
console.log(checkVowel("Aditya"));


// 5. Create a function that checks if a string is palindrome.

const checkPlindrome = str => {

    const newStr = str.toLowerCase().split("").reverse().join("");

    return str.toLowerCase() == newStr ? "Yes" : "No";

}
console.log(checkPlindrome("Mam"))


// 6. Write a callback function example using setTimeout.

const show = () => console.log("I am get Executed");
// let timer = setTimeout(show, 1000)


// 7. Create a higher-order function that executes another function twice.

const cb = () => console.log("Executed");

const HOF = (fn) => {
    fn();
    fn();
}
HOF(cb);


// 8. Write a function that returns another function.

function clouser(){

    let count = 0;

    return function(){
        count++;
        console.log(`Count -> ${count}`)
    }

}
let counter = clouser();
counter()
counter()
counter()
counter()
counter()
counter()
let secCounter = clouser()
secCounter()
secCounter()
secCounter()
secCounter()
secCounter()
secCounter()


// 9. Create a pure function for subtraction.

const subtraction = (a, b) => a > b ? a - b : b - a;
console.log(subtraction(10, 5))
console.log(subtraction(10, 50))


// 10. Create an impure function using global variable modification.

let count = 10;

const impureFn = () => {
    count++
}

console.log(count)

impureFn()

console.log(count)