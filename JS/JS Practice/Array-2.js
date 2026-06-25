// Array Practice Question 

// Array Intermedaite -> 11 - 20

// 1. Use splice to remove elements.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr)
arr.splice(0, 2)
console.log(arr)


// 2. Use splice to insert elements.

arr.splice(0, 0, 1, 2)
console.log(arr)


// 3. Use slice to copy array.

let newArr = arr.slice(0)
console.log(newArr)


// 4. Find index of an element.

console.log(newArr.indexOf(10))


// 5. Check if array contains a value.

console.log(newArr.includes(6))
console.log(newArr.includes(66))


// 6. Join array elements with .

console.log(arr.join("."))


// 7. Merge two arrays using spread operator.

let a1 = [1, 2, 3, 4, 5]
let a2 = [6, 7, 8, 9, 10]
let a3 = [...a1, ...a2]
console.log(a3)


// 8. Copy array using spread operator.

let copyArr = [...a1]
console.log(copyArr)


// 9. Find maximum value using Math.max.

console.log(Math.max(...copyArr))


// 10. Swap two variables using destructuring.

let b1 = [1, 2, 3, 5, 6, 7, 8, 9]

let x = null, y = null;

[x, y] = b1;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);