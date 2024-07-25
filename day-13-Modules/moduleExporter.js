// Task 1
function addTwoNum(a, b) {
  return a + b;
}
module.export = addTwoNum;

// Task 2
const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

module.export = person;

// Task 3

export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

// Task 4
export function divide(a, b) {
  return a / b;
}

// Task 5
const PI = 3.14;
const E = 2.71;

function circleArea(radius) {
  return PI * radius * radius;
}

function squareArea(side) {
  return side * side;
}

module.exports = { PI, E, circleArea, squareArea };
