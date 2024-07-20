// Task 1 Use template literal to create a string the includes varaible for a person's name and age, and log it
const name = "John";
const age = 32;
console.log(`Your name is ${name} and your age is ${age}`);

// Task 2 Create a multi-line strong using template literal and log it to the console
const createTable = `CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    )`;

console.log(createTable);

// Task 3 Use array destructuring to extract the first and seconod element from an array of numbers and log it
const numArr = [1, 2, 3, 4, 5];
const [first, second] = numArr;
console.log("first:", first);
console.log("second:", second);

// Task 4 Use object destructuring to extract the title and author from a book object and log them
const book = { title: "Book 1", author: "Author 2", year: 0 };

const { title, author } = book;
console.log(title, author);

// Task 5 Use spread operator to create a new array that includes all elements of an existing array plus additional elements and log

const oldArr = [1, 2, 3, 4, 5, 6];
const additionalArr = [7, 8, 9];
const newArr = [...oldArr, ...additionalArr];

console.log(newArr);

// Task 6 Use the rest operator in a function to accept number of argument, sum them and return the result

function sum(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Task 7 Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function calculateProduct(a, b = 1) {
  return a * b;
}

console.log(calculateProduct(10));

// Task 8 Use enhanced object literal to create a object with method and poperties and log the object to the console
function enhanceObject(company, model, year) {
  return {
    company: company,
    model: model,
    year: year,
  };
}

console.log(enhanceObject("Apple", "iPhone 15", "2024"));

// Task 9 Create an object with computed property names based on varaibles and log the object
const key1 = "language";
const key2 = "isStudent";

const obj = {
  name: "dillion",
  age: 1000,
  [key1]: "javascript",
  [key2]: true,
};

console.log(obj);
