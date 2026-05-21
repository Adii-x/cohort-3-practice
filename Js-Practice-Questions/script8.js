// ## Conditionals

// 1. Check whether a number is positive or negative.
// 2. Check whether a number is even or odd.
// 3. Check whether a person is eligible to vote.
// 4. Find the largest among two numbers.
// 5. Find the largest among three numbers.
// 6. Check whether a year is a leap year.
// 7. Check whether a number is divisible by both 3 and 5.
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.


// Question 1 -

var num = 10;

var isPositive = true;

if(num < 0) isPositive = false;

console.log(isPositive);

// Question 2 - 

var num1 = 10;

if(num1 % 2 === 0) console.log("Even");
else console.log("Odd");

// Question 3 - 

var age = 18;

if(age >= 18) console.log("You can vote");
else console.log("You cannot vote");

// Question 4 - 

var a1 = 20;
var a2 = 10;

if(a1 > a2) console.log(`${a1} is greater then ${a2}`);
else if(a1 < a2) console.log(`${a1} is smaller then ${a2}`);
else console.log(`${a1} and ${a2} are equal`);

// Question 5 - 

var b1 = 1;
var b2 = 2;
var b3 = 3;

if(b1 >= b2 && b1 >= b3){
    console.log(b1 + " is greater");
}
else if(b2 >= b1 && b2 >= b3){
    console.log(b2 + " is greater");
}
else{
    console.log(b3 + " is greater");
}

// Question 6 - 

var year = 1900;

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) console.log("Leap year");
else console.log("Not a Leap Year")

// Question 7 - 

var num2 = 15;

if((num2 % 3 === 0) && (num2 % 5 === 0)) console.log("Number is Divisible by 3 and 5");
else console.log("Number is not divisible by 3 and 5");

// Question 8 - 

var grade = 99;

if(grade > 90) console.log("A");
else if(grade > 75) console.log("B");
else if(grade > 50) console.log("C");
else console.log("Fail");

// Question 9 - 

var ch = "A";

if(ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U" || ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") console.log("Vowel");
else console.log("Consonents");

// Question 10 - 

var day = 10;
var dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;

    case 2:
        dayName = "Tuesday";
        break;
    
    case 3:
        dayName = "Wednesday";
        break;
    
    case 4:
        dayName = "Thursday";
        break;

    case 5:
        dayName = "Friday";
        break;
    
    case 6:
        dayName = "Saturday";
        break;

    case 7:
        dayName = "Sunday";
        break;

    default:
        dayName = "Invalid Day";
}

console.log(dayName);

//  Question 11 -

var user = "admin";
var password = "1234";

if(user == "admin" && password == "1234") console.log("Valid Credentials");
else console.log("Invalid Credentials");