// ## Strings

// 1. Create a string and print its length.
// 2. Convert a string into uppercase.
// 3. Convert a string into lowercase.
// 4. Check if a string includes the word `"JavaScript"`.
// 5. Extract the word `"World"` from `"Hello World"`.
// 6. Replace `"apple"` with `"mango"` in a sentence.
// 7. Split `"HTML,CSS,JS"` into an array.
// 8. Remove extra spaces from a string.
// 9. Repeat the word `"Hi"` 5 times.
// 10. Print the first character of a string.
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

// Question 1 -

var name = "Aditya";
console.log(name.length);

// Question 2 - 

var name = "aditya";
console.log(name.toUpperCase());

// Question 3 - 

var name = "ADITYA";
console.log(name.toLowerCase());

// Question 4 - 

var sentence = "I love JavaScript";

console.log(sentence.includes("JavaScript"));

// Question 5 - 

var greet = "Hello World";

var subString = greet.slice(6);

console.log(subString);

// Question 6 - 

var sen = "I like apple to eat."

var newSen = sen.replace("apple", "mango");

console.log(sen);
console.log(newSen);

// Question 7 - 

var lang = "HTML, CSS, JS";

var arr = lang.split(",");

console.log(arr);

// Question 8 - 

var spaces = "           Aditya             ";

console.log(spaces);

var newStr = spaces.trim();

console.log(newStr);

// Question 9 - 

var Hi = "hi";

var newHi = Hi.repeat(5);

console.log(newHi);

// Question 10 - 

var name = "Aditya";

console.log(name[0]);

// Question 11 - 

var name = "Aman";
var age = 20;

console.log(`My name is ${name} and I am ${age} years old`);