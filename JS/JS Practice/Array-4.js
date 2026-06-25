// Array Questions

// Basic to Advance

/*

1. Array

Intermediate

Create an array of 5 favorite movies and print all values.
Hint: Use indexing

Hard

Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
Hint: Mixed data types + nested indexing

*/

let favMovies = [
  "Sipder-Man: No Way Home",
  "Avengers: Endgame",
  "Lucky the Racer",
  "IronMan - 1",
  "SuperMan",
];

for (const element of favMovies) {
  console.log(element);
}

const arr = [
  [1, 2, 3, 4, 5],
  ["Aditya", "Yash", "Prem", "Ajit", "Sanskar"],
  [true, false, true, false, true],
];

for (const elements of arr) {
  for (const element of elements) {
    console.log(element);
  }
  console.log("===============================");
}

/*

2. Indexing in Array

Intermediate

Print the first and last element of an array.
**Hint:** Use `0` and `length - 1`

Hard

Swap the second and second-last element using indexing.
**Hint:** Use temporary variable

*/

let n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`First Element -> ${n1[0]} & Last Element -> ${n1[n1.length - 1]}`);
console.log(n1);

let temp = n1[1];
n1[1] = n1[n1.length - 2];
n1[n1.length - 2] = temp;
console.log(n1);

/*

3. Multi-Dimensional Arrays

Intermediate

Create a 2D array and print all first elements of inner arrays.
**Hint:** Double indexing

Hard

Find the sum of all diagonal elements in a 3x3 matrix.
**Hint:** Same row and column index

*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const row of matrix) {
  for (const element of row) {
    console.log(element);
  }
}

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i === j) sum += matrix[i][j];
  }
}
console.log(`Sum -> ${sum}`);

/*

4. length

Intermediate

Find total elements in an array without counting manually.
**Hint:** Use `.length`

Hard

Create a function that checks whether array length is even or odd.
**Hint:** Use modulus operator

*/

let v1 = [1, 2, 3, 4, 5, 6];
console.log(v1);
console.log(`Length -> ${v1.length}`);

const checkLength = (arr) => {
  if (arr.length % 2 === 0) return "Even";
  return "Odd";
};

console.log(checkLength(v1));
console.log(checkLength(arr));

/*

5. push()

Intermediate

Add 3 new elements at the end of array.
**Hint:** Use `push()`

Hard

Add elements dynamically inside loop from another array.
**Hint:** Loop + push

*/

let arrr = [1, 2, 3, 4, 5, 6, 7];
console.log(arrr);
// arrr.push(8)
// arrr.push(9)
// arrr.push(10)
// console.log(arrr)
let anotherArray = [8, 9, 10];

for (let i = 0; i < anotherArray.length; i++) {
  arrr.push(anotherArray[i]);
}

console.log(arrr);

/*

6. pop()

Intermediate

Remove last element and print removed value.
**Hint:** Store `pop()` result

Hard

Keep removing elements until array becomes empty.
**Hint:** Use `while` loop

*/

console.log(arrr);
let popElem = arrr.pop();
console.log(arrr);
console.log(popElem);

while (arrr.length > 0) {
  arrr.pop();
  console.log(arrr);
}

/*

7. unshift()

Intermediate

Add one username at beginning of array.
**Hint:** Use `unshift()`

Hard

Insert multiple elements at beginning without replacing existing ones.
**Hint:** Multiple arguments

*/

let user = ["Guest 1", "Guest 2", "Guest 3", "Guest 4", "Guest 5"];
console.log(user);
user.unshift("Guest 0");
console.log(user);
user.unshift("Guest -3", "Guest -2", "Guest -1");
console.log(user);

/*

8. shift()

Intermediate

Remove first element from array.
**Hint:** Use `shift()`

Hard

Remove first element repeatedly until only 2 elements remain.
**Hint:** Loop + length check

*/

user.shift();
console.log(user);

while (user.length > 2) {
  user.shift();
  console.log(user);
}

/*

9. splice()

Intermediate

Remove 2 elements from middle of array.
**Hint:** `splice(start, deleteCount)`

Hard

Replace 3 middle elements with 5 new values.
**Hint:** Use insertion with splice

*/

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numArr)

numArr.splice(Math.floor(numArr.length / 2), 2)
console.log(numArr)

numArr.splice(Math.floor(numArr.length / 2), 0, -1, -2, -3)
console.log(numArr)




/*

10. reverse()

Intermediate

Reverse an array using method.
**Hint:** Use `reverse()`

Hard

Reverse only first half of array.
**Hint:** Manual swapping

*/


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array)

let halfArr = array.splice(0, Math.floor(array.length / 2)).reverse()
array = [...halfArr, ...array]
console.log(array)


/*

11. sort()

Intermediate

Sort numbers in ascending order.
**Hint:** Compare function

Hard

Sort array so even numbers come first and odd later.
**Hint:** Custom compare logic

*/

/*

12. slice()

Intermediate

Extract first 4 elements into new array.
**Hint:** Use `slice()`

Hard

Create a copy excluding first and last element.
**Hint:** Use start and end indexes

*/

/*

13. concat()

Intermediate

Merge two arrays.
**Hint:** Use `concat()`

Hard

Merge 3 arrays and remove duplicate values.
**Hint:** Combine + loop/includes

*/

/*

14. includes()

Intermediate

Check whether "apple" exists in array.
**Hint:** Use boolean result

Hard

Check if all elements of one array exist inside another.
**Hint:** Loop + includes

*/

/*

15. indexOf()

Intermediate

Find index of "Rahul" in array.
**Hint:** Use `indexOf()`

Hard

Find all positions of repeated number 5.
**Hint:** Loop through entire array

*/

console.log("========================================")

let guest = ["Aditya", "Rahul", "Yash", "Prem"]
let fiveNum = [1, 2, 6, 5, 10, 5, 3, 5, 5, 9]

console.log(guest.indexOf("Rahul"))


for(let i = 0; i < fiveNum.length; i++){
  if(fiveNum[i] === 5) console.log(i)
}

console.log("========================================")

/*

16. join()

Intermediate

Convert array into comma separated string.
**Hint:** Use `join(",")`

Hard

Convert array into sentence format.
**Hint:** Join with spaces

*/

console.log("========================================")

let q1 = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(q1.join(','))

console.log(q1.join(" "))

console.log("========================================")

/*

17. for loop

Intermediate

Print all array elements using loop.
**Hint:** Loop through indexes

Hard

Print elements at only even indexes.
**Hint:** Increase loop smartly

*/

let z1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("========================================")

for(let i = 0; i < z1.length; i++) console.log(z1[i])
  
for(let i = 0; i < z1.length; i++){ 
  if(i % 2 === 0) console.log(z1[i])    
}


console.log("========================================")

/*

18. for...of

Intermediate

Print all values using `for...of`.
**Hint:** Direct value iteration

Hard

Count vowels from array of characters.
**Hint:** Use conditions inside loop

*/

let c1 = [1, 2, 3, 4, 5, 6, 7]

for (const element of c1) {
    console.log(element)
}

let vowels = ['a', 'e', 'i', 'x', 'w', 'o', 'p']

let count = 0;

for (const element of vowels) {
    if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') count++
}
console.log(`Vowels -> ${count}`)



/*

19. Reference Behaviour of Array

Intermediate

Assign one array to another variable and modify second one.
**Hint:** Observe original array

Hard

Create true copy so original array does not change.
**Hint:** Use spread operator

*/

let a1 = [1, 2, 3, 4];
let a2 = a1;
a2.pop()
console.log(a1)

a2 = JSON.parse(JSON.stringify(a1))
a2.pop()
console.log(a2)
console.log(a1)


/*

20. Spread Operator

Intermediate

Copy array into new array.
**Hint:** Use `...`

Hard

Merge arrays and add extra values in between.
**Hint:** Combine spread carefully

*/

let arr1 = [10, 20, 30, 40];

let arr2 = [...arr1];

console.log(arr2);

let arr3 = [7, 8, 9];

let result = [...arr1, 4, 5, 6, ...arr3];

console.log(result);