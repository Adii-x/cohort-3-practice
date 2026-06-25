// Js sheet 3 - https://app.notion.com/p/JavaScript-Beginner-Practice-Questions-Phase-2-Sheet-3-36daa7c5a79e804fb530c64aca3bfe8f
 
// Question 1 -

let prices = [100, 250, 399, 499];

prices.forEach(val => console.log(`₹ ${val}`))

let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];

students.forEach(obj =>{
    if(obj.marks > 50) console.log(`${obj.name} - Pass`)
    else console.log(`${obj.name} - Fail`)
})


// Question 2 -

let names = ["anubhav", "rahul", "aman"];

let newNames = names.map(val => val.toUpperCase())
console.log(newNames)

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

let discountProducts = products.map(obj => {
    let discout = obj.price - (obj.price * 10 / 100)
    obj["discountedPrice"] = discout
    return obj
})
console.log(discountProducts)


// Question 3 -

let nums = [1,2,3,4,5,6,7,8];

let evenNums = nums.filter(val => val % 2 === 0)
console.log(evenNums)

let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];

let activeUsers = users.filter(user => user.active === true)
console.log(activeUsers)


// Question 4 -

let nums1 = [10,20,30,40];

let sum = nums1.reduce((acc, val) =>{
    return acc + val
}, 0)

console.log(sum)

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let freqElements = fruits.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

console.log(freqElements);


// Question 5 - 

let nums2 = [20, 35, 60, 80];

console.log(nums2.find(val => val > 50))

let users1 = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];

console.log(users1.find(obj => {
    return obj.username === 'admin'
}))


// Question 6 -

let nums3 = [10, 40, 90, 50];

console.log(nums3.findIndex(val => val === 90))

let students2 = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
  { name: "D", marks: 30 }
];

console.log(students2.findIndex(obj =>{
    return obj.marks < 40
}))


// Question 7 -

let nums4 = [10, 20, -5, 40];
console.log(nums4.some(val => val < 0))

let products1 = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];

console.log(products1.some(obj => obj.stock === 0))


// Question 8 -

let nums5 = [10, 20, 30, 40];

console.log(nums5.every(val => val > 0))

let students3 = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];

console.log(students3.every(obj => obj.marks > 40))