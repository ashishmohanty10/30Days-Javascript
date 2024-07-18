// Task 1 Create an array of numbers from 1 to 5 and log it
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Task 2 Access the first and last elements of array and log them
const firstElem = arr1[0];
const lastElem = arr1[4];
console.log(firstElem, lastElem);

// Task 3 Use the push method to add a new number and log it
const updateArr1 = arr1.push(6);
console.log(arr1);

// Task 4 use pop method to remove the last elem. from the array and log it
const poppedArr = arr1.pop();
console.log(arr1);

// Task 5 Use shift method to remove the first element from the array and log it
const shifterArr = arr1.shift();
console.log(arr1);

// Task 6 Use unshift method to add a new number to the beginning of the array
const unShiftArr = arr1.unshift(1);
console.log(arr1);

// Task 7 Use map method to create a new array where each number is doubled and log it
function mappedArray(arr1) {
  return arr1.map((elem) => elem * elem);
}
console.log(mappedArray(arr1));

// Task 8 Use the filter method to create a new array with only even number and log it
function filteredArray() {
  return arr1.filter((elem) => {
    if (elem % 2 !== 0) {
      return null;
    } else {
      return elem;
    }
  });
}
console.log(filteredArray(arr1));

// Task 9 Use the reduce method to calculate the sum of all number and log it
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

// Task 10 Use for loop to iterate over the array and log it
function loopedArr(arr1) {
  const result = [];
  for (let i = 0; i <= arr1.length; i++) {
    result.push(arr1[i]);
  }
  return result;
}
console.log(loopedArr(arr1));

// Task 11 Use the forEach method to iterate over the array and log it
arr1.forEach((elem) => console.log(elem));

// Task 12 Create a two-dimensional array (matrix) and log the entire array to the console
const twoDArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Entire 2d array", twoDArr);

/* Task 13 :=> */
console.log("Specific element of 2d array", twoDArr[0][2]);
console.log("Specific element of 2d array", twoDArr[1][1]); //5
