// // 1. Array

// // Intermediate

// // Create an array of 5 favorite movies and print all values.
// // **Hint:** Use indexing

// // Hard

// // Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
// // **Hint:** Mixed data types + nested indexing

// const favMovies = ["Spider-Man: No Way Home", "Iron-Man 1", "Endgame", "Lucky The Racer", "Random One"]

// for (const element of favMovies) {
//     console.log(element)
// }

// const arr = [23467, "sadhuisa", true, [1, 2, 3, 4, 5, 6, 7]]

// for (const element of arr[3]) {
//     console.log(element)
// }

// // =====================================================================================


// // 2. Indexing in Array

// // Intermediate

// // Print the first and last element of an array.
// // **Hint:** Use `0` and `length - 1`

// // Hard

// // Swap the second and second-last element using indexing.
// // **Hint:** Use temporary variable

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(`First Elem - ${newArr[0]} & Last Elem - ${newArr[newArr.length - 1]}`)

// console.log(newArr);

// let temp = newArr[1];
// newArr[1] = newArr[newArr.length - 2];
// newArr[newArr.length - 2] = temp;

// console.log(newArr)


// // =====================================================================================


// // 3. Multi-Dimensional Arrays

// // Intermediate

// // Create a 2D array and print all first elements of inner arrays.
// // **Hint:** Double indexing

// // Hard

// // Find the sum of all diagonal elements in a 3x3 matrix.
// // **Hint:** Same row and column index


// const mArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for (const element of mArray) {
//     console.log(element[0])
// }

// let sum = 0;

// for(let i = 0; i < mArray.length; i++){
//     for(let j = 0; j < mArray[i].length; j++){
//         if(i === j) sum += mArray[i][j]
//     }
// }

// console.log(sum)



// // =====================================================================================



// // # 4. length

// // Intermediate

// // Find total elements in an array without counting manually.
// // **Hint:** Use `.length`

// // Hard

// // Create a function that checks whether array length is even or odd.
// // **Hint:** Use modulus operator


// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr1.length)

// const arrCheck = (x) => {
//     if(x.length % 2 === 0) return "Even Length"
//     return "Odd Length"
// } 

// console.log(arrCheck(arr1))


// // =====================================================================================


// const arr = [1, 2, 3, 4, 5, 6, 7]
// const newArr = [0, -1, -2, -3]

// console.log(arr)

// arr.push(8)
// arr.push(9)
// arr.push(10)

// console.log(arr)

// for(let i = 0; i < newArr.length; i++){
//     arr.push(newArr[i]);
// }

// console.log(arr)


// =====================================================================================



// const arr = [1, 2, 3, 4, 5, 6, 7]

// // console.log(arr.pop())

// console.log(arr)

// while(arr.length > 0) arr.pop()

// console.log(arr)



// =====================================================================================



// const arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(arr)

// arr.unshift("userName")

// console.log(arr)

// arr.unshift("hello", 324, 2347, "Hey There")

// console.log(arr)


// =====================================================================================


// arr.shift()

// console.log(arr)

// while(arr.length != 2){
//     arr.shift()
// }

// console.log(arr)



// =====================================================================================



const arr = [4, 8, 1, 3, 9, 10, 37, 546]

// console.log(arr.reverse())



// =====================================================================================


console.log(arr);

// console.log(arr.sort((a, b) => {
//     return a - b
// }))

console.log(arr.sort((a, b) => {
    return (a % 2) - (b % 2);
}))

