// Easy - 

// Question 1 

// const checkEvenOrOdd = num => num % 2 === 0 ? "Even" : "Odd";

// console.log(checkEvenOrOdd(1))
// console.log(checkEvenOrOdd(2))
// console.log(checkEvenOrOdd(3))
// console.log(checkEvenOrOdd(4))
// console.log(checkEvenOrOdd(5))


// Question 2 

// const greet = (name = "Guest", age = 18) => `Hello, ${name}! You are ${age} years old.`;

// console.log(greet("Adi", 25));
// console.log(greet());
// console.log(greet("Yash"));
// console.log(greet(undefined, 21));


// Question 3 

// const area = (l = 0, b = 0) => l * b;

// console.log(area(10, 10));
// console.log(area(0, 10));
// console.log(area(1.2, 1.2));
// console.log(area(10));
// console.log(area(2, 3));


// Question 4 

// const factory = () => {
//     let count = 0;
//     return function(){
//         return count++;
//     }
// }

// let counter1 = factory();
// let counter2 = factory();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

 
// Question 5 

// const maxElem = arr => arr.reduce((acc, val) => {
//     if(val > acc) return val;
//     return acc;
// }, 0)

// console.log(maxElem([1, 2, 3, 4, 5]));
// console.log(maxElem([10, 3, 2, 11, 11]));
// console.log(maxElem([23, 1]));
// console.log(maxElem([1, 2]));


// Medium 

// Question 6 

// const products = [
//     {
//         name: "Laptop",
//         price: 65000,
//         category: "Electronics"
//     },
//     {
//         name: "Mouse",
//         price: 800,
//         category: "Electronics"
//     },
//     {
//         name: "Keyboard",
//         price: 1500,
//         category: "Electronics"
//     },
//     {
//         name: "Shirt",
//         price: 1200,
//         category: "Clothing"
//     },
//     {
//         name: "Jeans",
//         price: 2200,
//         category: "Clothing"
//     },
//     {
//         name: "Notebook",
//         price: 100,
//         category: "Stationery"
//     },
//     {
//         name: "Pen",
//         price: 30,
//         category: "Stationery"
//     },
//     {
//         name: "Water Bottle",
//         price: 500,
//         category: "Accessories"
//     }
// ];

// const productName = products.map(obj => obj.name);
// console.log("Products Name Array -", productName);

// const sameCategory = products.filter(obj => obj.category === "Clothing");
// console.log(sameCategory);

// const totalPrice = products.reduce((acc, val) => {
//     return acc + val.price;
// }, 0);
// console.log(totalPrice);


// Question 7 

// function debounce(fnc, delay) {
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             fnc(...args);
//         }, delay)
//     }
// }

// (debounce(function(){
//     console.log("Hello")
// }, 2000))();


// Question 8

// const fn1 = () =>{
//     return new Promise((resolve, reject) => {  
//         setTimeout(function(){
//             console.log("Step 1");
//             resolve()
//         }, 3000)
//     })
// }

// const fn2 = () =>{
//     return new Promise((resolve, reject) => {  
//         setTimeout(function(){
//             console.log("Step 2");
//             resolve()
//         }, 3000)
//     })
// }

// const fn3 = () =>{
//     return new Promise((resolve, reject) => {  
//         setTimeout(function(){
//             console.log("Step 3");
//             resolve()
//         }, 3000)
//     })
// }

// async function show() {
//     await fn1();
//     await fn2();
//     await fn3();
// }

// show()


// Question 9

// const authorArray = []

// fetch('https://picsum.photos/v2/list')
// .then(function(rawdata){
//     return rawdata.json();
// })
// .then(function(data){
//     data.forEach(obj => {
//         authorArray.push({
//             id: obj.id,
//             author: obj.author
//         })
//     });
// })

// console.log(authorArray)


// Question 10 

