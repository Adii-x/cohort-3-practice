// Functions Questions Practice

// Intermediate -> 21 - 35

// 1. Write a recursive function for factorial.

// const fact = (n) => {
    
//     if(n < 1) return 1;
    
//     return n * fact(n - 1);

// }
// console.log(fact(6))


// 2. Write recursive Fibonacci function.

const fibonacciSeries = n => {

    if(n == 0 || n == 1) return 1;

    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
    
}
console.log(fibonacciSeries(10));


// 3. Create a function that finds power using recursion.

const power = (base, pow) => {

    let num = base

    if(pow === 0) return 1;

    if(pow < 1) return;
    
    num = base * power(base, pow - 1);

    return num

}
console.log(power(2, 3));


// 4. Create an IIFE that prints "Executed".

(function() {
    console.log("Executed")
})()


// 5. Write a function that memoizes factorial calculation.

const storage = {};

const factorial = (num) => {

    if(storage[num]) {
        console.log("From Cache...")
        return storage[num];
    }

    let fact = 1;

    for(let i = 1; i <= num; i++) fact *= i;

    storage[num] = fact;

    return fact;

}
console.log(factorial(5))
console.log(factorial(5))


// 6. Create a closure counter function.

// 7. Write a function currying example for addition.

// 8. Create debounce function logic.

// 9. Create throttle function logic.

// 10. Write a function that executes only once.

// 11. Create custom implementation of map.

// 12. Create custom implementation of filter.

// 13. Create custom implementation of reduce.

// 14. Create custom forEach.

// 15. Explain output:

function test() {
    return;
    console.log("Hello");
}
console.log(test());    