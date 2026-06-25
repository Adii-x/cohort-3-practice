// JS Sheet 4 - https://app.notion.com/p/JavaScript-Beginner-Practice-Questions-Phase-2-Sheet-4-36eaa7c5a79e809f9fd9c64433500b6f
 
// Question 1 -

const student = {name : 'Aditya', age: 20, course: 'CS'}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.course)


// Question 2 -

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}

console.log(`Using dot - ${car.brand} & Using bracket - ${car["brand"]}`)
console.log(`Using dot - ${car.model} & Using bracket - ${car["model"]}`)


// Question 3 -

const user = {
  name: "Anubhav",
  age: 20
}
console.log(`Before changing -> ${user.age}`)
user.age = 25
console.log(`After changing -> ${user.age}`)


// Question 4 - 

console.log(user)
user["isAdmin"] = true;
console.log(user)

 
// Question 5 - 

const account = {
  username: "john",
  password: "12345"
}

console.log(`Before Delete ->`, account)
delete account.password
console.log(`After Delete ->`, account)


// Question 6 - 

const countProperties = obj => {
    return Object.keys(obj).length
}

console.log(countProperties({a: 1, b: 2}))
console.log(countProperties({a: 1, b: 2, c: 3, d: 4}))


// Question 7 - 

const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}

for (const key in person) {
    if (!Object.hasOwn(person, key)) continue;
    console.log(`${key} : ${person[key]}`)   
}


// Question 8 -

let obj = {
    name: 'xyz',
    age: 99,
    email: 'xyz@xyz.com'
}

console.log("email" in obj)


// Question 9 -

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const obj3 = {...obj1, ...obj2}
console.log(obj3)


// Question 10 -

const user1 = {
  name: "Aman",
  age: 21
}

console.log(Object.entries(user1))

 
// Question 11 -

const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 100
}

let highestMarks = marks.Anubhav;

for (const key in marks) {
    if (!Object.hasOwn(marks, key)) continue;
    
    if(marks[key] > highestMarks) highestMarks = marks[key]

}

console.log(highestMarks)

 
// Question 12 -

const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}

let sum = 0;

for (const key in salaries) {
    if (!Object.hasOwn(salaries, key)) continue;
    
    sum += salaries[key]
    
}

console.log(sum)


// Question 13 - 

const user2 = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}

console.log(`City -> ${user2.address.city}`)
console.log(`Pincode -> ${user2.address.pincode}`)


// Question 14 - 

const studentInfo = {
    name: 'xyz',
    marks: 70,
    getResult(){
        if(this.marks > 40) console.log("Pass")
        else console.log("Fail")
    }
}

studentInfo.getResult()

 
// Question 15 -

const arr = ["name", "Anubhav", "age", 24];

const obj4 = {}

for (let i = 0; i < arr.length; i += 2) {
    obj4[arr[i]] = arr[i + 1];
}

console.log(obj4)

 
// Question 16 -

let str = 'banana';

let freqWord = {};

for (const element of str) {
  if(freqWord[element]) freqWord[element]++;
  else {
    freqWord[element] = 1;
  }
}

console.log(freqWord)