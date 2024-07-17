// Task 1 Write a function to check if a number is even or odd and log the result to the console
function evenOdd(num) {
  if (num % 2 == 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}
evenOdd(2);

// Task 2 Write a function to calculate the square of a number and return the result
function sqsureOfaNumber(num) {
  if (typeof num !== "number") return console.error("wrong format");
  const result = num * num;
  return console.log(result);
}
sqsureOfaNumber(12);

// Task 3 Write a function to find maximum of two numbers
function maximum(a, b) {
  if (typeof a !== "number" && typeof b !== "number")
    return console.error("wrong format");

  if (a > b) {
    return console.log("a is greater");
  } else {
    console.log("b is better");
  }
}
maximum(2, 3);

// Task 4 Write a function to cancatenate two string
function concatenateStrings(str1, str2) {
  if (typeof str1 !== "string" && typeof str2 !== "string")
    return console.error("wrong formate");

  const concatenatedStrings = str1 + str2;
  return console.log(concatenatedStrings);
}
concatenateStrings("abcd", "efgh");

// Task 5 Write an arrow fucntion to return sum of two number
const sumOfTwoNumbers = (a, b) => {
  if (typeof a !== "number" && typeof b !== "number")
    return console.error("wrong format");

  const sum = a + b;
  console.log(sum);
};
sumOfTwoNumbers(2, 2);

// Task 6 Write an function to check is a string containes a specific character and return boolean values
const includesString = (str, char) => {
  if (typeof str !== "string") {
    console.error("Wrong format: Input is not a string");
    return false;
  }

  if (typeof char !== "string" || char.length !== 1) {
    console.error("Wrong format: Input is not a single character");
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }

  return false;
};

console.log(includesString("hello", "e"));

// Task 7 Write a function that takes two parameter and retuns their product.Provide a default value for the second parameter
const productOfTwoNumber = (a, b = 2) => {
  if (typeof a !== "number") return console.error("wrong format");
  const product = a * b;
  console.log(product);
};
productOfTwoNumber(2);

// Task 8 Write a function that takes a person's name and age and returns a greeting message. Provide adefault value for the age.
const personalInfo = (name, age = 45) => {
  console.log(`Hi ${name}, and your are ${age} years old`);
};
personalInfo("Sham");

// Task 9 Write a higher order function which takes a function and a values and call it that many times
const higherOrderFunc = (fn, num) => {
  for (let i = 0; i < num; i++) {
    fn();
  }
};

function fn() {
  console.log("hello world");
}

higherOrderFunc(fn, 3);

// Task 10 Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const composeFunctions = (func1, func2, value) => {
  const resultFromFunc1 = func1(value);
  const finalResult = func2(resultFromFunc1);
  return finalResult;
};

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;

const initialValue = 3;
const composedResult = composeFunctions(addOne, multiplyByTwo, initialValue);
console.log(composedResult);
