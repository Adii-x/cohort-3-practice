// ## Intermediate Level

// 1. Write a function expression for multiplication.
// 2. Convert a normal function into an arrow function.
// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// 4. Write a function that counts vowels in a string.
// 5. Create a function that checks if a string is palindrome.
// 6. Write a callback function example using `setTimeout`.
// 7. Create a higher-order function that executes another function twice.
// 8. Write a function that returns another function.
// 9. Create a pure function for subtraction.
// 10. Create an impure function using global variable modification.

// Question 1 -

const multiply = (a, b) => a * b;

console.log(multiply(10, 5));
console.log(multiply(1, 3));
console.log(multiply(1, 1));

// Question 2 -

// function greet(){
//     console.log("Welcome")
// }

// const greet = () => {
//     console.log("Welcome")
// }

// Question 3 -

const sum = (...elems) => {
  let sum = 0;

  for (const element of elems) {
    sum += element;
  }

  return sum;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2));
console.log(sum(243, 34345, 435, 435, 345, 345, 34));

// Question 4 -

const countVowel = () => {

  const inp = prompt("Enter you string").toLocaleLowerCase();

  const vowels = "aeiou";

  let count = 0;

  for (const element of inp) {
    if (vowels.includes(element)) count++;
  }

  return count;
};

// console.log(countVowel())

// Question 5 - 

const checkPlindrome = (str) => {

    let revStr = str.split("").reverse().join("").toLocaleLowerCase();

    if(str.toLowerCase() === revStr) return true;

    return false;

}

console.log(checkPlindrome("MaM"))
console.log(checkPlindrome("MaMa"))

// Question 6 - 

