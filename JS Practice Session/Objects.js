// Objects - https://drive.google.com/file/d/1pQAXY5lF9b2s_HjrL2oF4Y7B2isNpw2M/view

// Easy -

const user = {
    name: 'Aditya',
    age: 20
}

user.age = 21;

console.log(user)


// Moderate - 

const user1 = {
    name: 'Aditya',
    age: 20,
    city: 'Bhopal'
};

for (const key in user1) {
    if (!Object.hasOwn(user1, key)) continue;
    
    const element = user1[key];
    
    console.log(`${key}: ${element}`)
}

 
// Hard -

const employees = {
    aman:25000,
    ritik:50000,
    priya:45000
}

const values = Object.values(employees)

let max = Math.max(...values)

for (const element in employees) {
    if(employees[element] === max) {
        console.log(element)
        break;
    }
}