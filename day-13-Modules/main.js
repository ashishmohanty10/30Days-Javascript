import addTwoNum from "./add.js";
import { person } from "./moduleExporter.js";
import { add, subtract, multiply, divide } from "./moduleExporter.js";
import { PI, circleArea } from "./constants";

const _ = require("lodash");
const Axios = require("axios");

// Task 1
console.log(addTwoNum(2, 5));

// Task 2
console.log(person.name);
console.log(person.age);

// Task 3
console.log(add(2, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));

// task 4
console.log(divide(2, 2));

// Task 5
console.log(PI);
console.log(circleArea(3));

// Task 6
const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice());
console.log(reversedArray);

// Task 7
try {
  Axios.getAdapter("https://jsonplaceholder.typicode.com/users").then((res) =>
    console.log(res.data)
  );
} catch (error) {
  console.error(error);
}
