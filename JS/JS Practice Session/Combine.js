// Arrays + Objects + Functions Together

// Easy -

const users = [
  { name: "Ritik", age: 20 },
  { name: "Aman", age: 16 },
  { name: "Priya", age: 25 },
];

const getAdults = (object) => {
  const adult = object.filter((obj) => {
    return obj.age >= 18;
  });
  return adult;
};

console.log(getAdults(users));

// Moderate -

const cart = [
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1000, qty: 1 },
  { name: "Monitor", price: 10000, qty: 1 },
];

const getCartTotal = (arr) => {
  let total = arr.reduce((acc, val) => {
    return acc + val.price * val.qty;
  }, 0);

  return total;
};

console.log(getCartTotal(cart));

// Hard -

let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85],
  },
  {
    name: "Aman",
    marks: [50, 40, 60],
  },
];

const generateReport = arr =>{

    const report = arr.map(obj =>{
        let avg = Math.floor(obj.marks.reduce((acc, val) => acc + val, 0) / 3)
        let grade = null;

        avg >= 85 ? grade = "A" : avg >= 70 ? grade = "B" : avg >= 50 ? grade = "C" : grade = "F";

        return {
            name: obj.name,
            average: avg,
            grade
        }
        
    })

    return report

}

console.log(generateReport(students))