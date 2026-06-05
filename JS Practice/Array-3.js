// Arrya Practice Questions

// Array Iteration Methods -> 21 - 40

// 1. Use forEach to print all numbers doubled.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr)
arr.forEach((val) =>{
    console.log(val * 2)
})


// 2. Use map to create a new array containing the square of each number.

let sqArr = arr.map((val) => {
    return val * val
})
console.log(sqArr)


// 3. Use filter to get all even numbers from an array.

let evenNumArr = arr.filter((num) =>{
    return num % 2 === 0
})
console.log(evenNumArr)


// 4. Use reduce to calculate the sum of all numbers in an array.

let sum = arr.reduce((acc, val) =>{
    return acc + val
}, 0)
console.log(sum)


// 5. Use reduce to find the maximum number in an array.

console.log(arr)
let maxNum = arr.reduce((acc, val) =>{
    if(val > acc) return val
    return acc
}, 0)
console.log(maxNum)


// 6. Use find to get the first even number from an array.

let evenNum = arr.find((val) =>{
    return val % 2 === 0
})
console.log(evenNum)


// 7. Use findIndex to locate the index of the first number greater than 50.

let v1 = [33, 46, 8, 3428846789, 3462]
let num = v1.findIndex((val) => {
    return val > 50
})
console.log(num)


// 8. Use some to check if any number in the array is negative.

console.log(arr.some((val) => {
    return val < 0
}))

// 9. Use every to check if all numbers in the array are positive.

console.log(arr.every(val => {
    return val > 0
}))


// 10. Create an array of names and use map to convert all names to uppercase.

let names = ['aditya', 'yash', 'sanskar', 'dagdu', 'kunal', 'abhay']
console.log(names)
let uppercaseNames = names.map(str => {
    return str.toUpperCase()
})
console.log(uppercaseNames)


// 11. Create an array of students with marks and use filter to get students who scored more than 80.

let marks = [46, 60, 90, 83, 78, 99, 100, 89, 10]
let filterArray = marks.filter(mark => {
    return mark > 80
})
console.log(filterArray)


// 12. Use reduce to calculate the average of numbers in an array.

let average = arr.reduce((acc, val) => acc + val, 0) / arr.length
console.log(average)


// 13. Count the occurrences of each number in an array using reduce.

arr = [1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 10]

let obj = {}

arr.reduce((acc, val) =>{
    
    if(obj[val]) obj[val]++;
    else {
        obj[val] = 1;
    }
    return acc
    
})
console.log(obj)


// 14. Flatten a nested array using the flat() method.

const a1 = [
    [80, 90],
    [70, 85],
    [95, 88]
];
console.log(a1.flat())


// 15. Remove duplicate values from an array using Set.

// 16. Sort an array of objects by age in ascending order.

let age = [32, 10, 23, 56, 22, 18, 12, 70]
console.log(age)
age.sort((a, b) => a - b)
console.log(age)


// 17. Calculate the total price of items in a shopping cart using reduce.

// 18. Group users by age using reduce.

// 19. Chain filter and map to get the squares of all even numbers.

// 20. Explain the difference between map() and forEach().