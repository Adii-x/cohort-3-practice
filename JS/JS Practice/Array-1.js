// Array Practice Question 

// Array Basics -> 1 - 10

// 1. Create an array of 5 fruits.

let arr = ['Apple', 'Mango', 'Banana', 'Grapes', 'Pineapple']
console.log(arr)

// 2. Print first and last element of array.

console.log(arr[0])
console.log(arr[arr.length - 1])


// 3. Find length of array.

console.log(`Array Length -> ${arr.length}`)


// 4. Add element at end using push.

arr.push('Pear')
console.log(arr)


// 5. Remove last element using pop.

arr.pop()
console.log(arr)


// 6. Add element at beginning using unshift.

arr.unshift('Cherry')
console.log(arr)


// 7. Remove first element using shift.

arr.shift()
console.log(arr)


// 8. Reverse an array.

console.log(arr)
arr.reverse()
console.log(arr)


// 9. Sort numbers ascending.

let numArr = [1, 65, 3, 2, 10, 2, 392]
console.log(numArr)
// numArr.sort((a, b) =>  a - b)
// console.log(numArr)


// 10. Sort numbers descending.

numArr.sort((a, b) => b - a)
console.log(numArr)