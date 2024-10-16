// question 1
let arr = [2, 5, 6, 8];
let sqrarr = arr.map((item) => {
  return item * item;
});
console.log(sqrarr);

// question2
function getgread(score) {
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "c"
    : score >= 60
    ? "d"
    : score >= 50
    ? "e"
    : "F";
}
console.log(getgread(60));

// question 3
let newyear = 2020;
let cars = {
  companyName: "Toyota",
  model: "Camry",
  year: 2015,
};
function ChangeCarModel(year) {
  cars.year = year;
}
ChangeCarModel(newyear);

const { model, year } = cars;
console.log(`model:${model} updateyear:${year}`);

// question 4

let NumbersArr = [1, 2, 7, 5, 10, 24, 9, 3];
let PrimeArr = NumbersArr.filter((num) => {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
});
console.log(PrimeArr);

// question 5
const person = [
  { name: "john", age: 17 },
  { name: "aman", age: 27 },
  { name: "vishal", age: 29 },
];
const names = person.map((person) => person.name);
console.log(names);

const adult = person.filter((person) => person.age >= 18);
console.log(adult);

const arrays = [
  [1, 2],
  [2, 3],
  [4, 5],
];
let flatarray = arrays.reduce((acc, arr) => {
  return acc.concat(arr);
}, []);
console.log(flatarray);

// question 6

// let fetchdata = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await response.json();
//   console.log(data);
// };
// fetchdata();

// question 7
const student = {
  name: "vishal",
  address: {
    street: "123 main st",
    city: "meerut",
  },
  contact: {
    phone: "123-456-7890",
    email: "vishal@example.com",
  },
};
const phoneNO=student.contact?.phone;
console.log(phoneNO);

