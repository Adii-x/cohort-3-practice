// Arrays - https://drive.google.com/file/d/1pQAXY5lF9b2s_HjrL2oF4Y7B2isNpw2M/view

// Easy - 

let prices = [100,250,500,150,700];

const newArr = prices.filter(val => val > 300)

console.log(newArr)


// Moderate -

let marks = [80,90,70,85,95];

let sum = marks.reduce((acc, val) =>{
    return acc + val
}, 0)

console.log(`Average - ${sum / marks.length}`)


// Hard - 

let numbers = [1,2,3,2,4,2,5,1,1,1];

const hashArr = [0];

for(let i = 0; i < numbers.length; i++){
    if(hashArr[numbers[i]]) hashArr[numbers[i]]++;
    else hashArr[numbers[i]] = 1    
}

let max = hashArr[0]
let index = 0

console.log(hashArr)

for(let i = 1; i < hashArr.length; i++){
    if(hashArr[i] > max) {index = i; max = hashArr[i]}
}

console.log(index)


