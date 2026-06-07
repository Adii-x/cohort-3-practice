// Functions - https://drive.google.com/file/d/1pQAXY5lF9b2s_HjrL2oF4Y7B2isNpw2M/view

// Easy -

const greet = name => `Hello ${name}`;

console.log(greet("Aditya"))


// Moderate - 

const calculateDiscount = price => price - (price * 0.1);

console.log(calculateDiscount(500))


// Hard -

const sum = (...val) => {
    let sum = val.reduce((acc, val) => {
        return acc + val
    }, 0)

    return sum

}

console.log(sum(1, 2, 3, 4, 5))