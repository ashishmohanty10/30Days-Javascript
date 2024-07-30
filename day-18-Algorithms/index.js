// Task 1 Sort algo
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[i] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array1));

// Selection Sort
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

let array2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", selectionSort(array2));

// Task 3 Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

let array3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", quickSort(array3));

// Task 4 Searching Algo
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let array = [64, 34, 25, 12, 22, 11, 90];
let target = 22;
let index = linearSearch(array, target);
if (index !== -1) {
  console.log(`Target value ${target} found at index:`, index);
} else {
  console.log(`Target value ${target} not found in the array.`);
}

// Task 5 Binary Search Algo
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

let array5 = [11, 12, 22, 25, 34, 64, 90];
let target1 = 22;
let index1 = binarySearch(array, target);
if (index !== -1) {
  console.log(`Target value ${target} found at index:`, index);
} else {
  console.log(`Target value ${target} not found in the array.`);
}

// Task 6 Character Counts
function countCharacterOccurrences(str) {
  let charCounts = {};

  for (let char of str) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  return charCounts;
}

let inputString = "hello world";
let characterCounts = countCharacterOccurrences(inputString);
console.log("Character counts:", characterCounts);

// Task 7 Longes substring
function lengthOfLongestSubstring(s) {
  let charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (charIndexMap.has(char)) {
      start = Math.max(start, charIndexMap.get(char) + 1);
    }

    charIndexMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

let inputString1 = "abcabcbb";
let length = lengthOfLongestSubstring(inputString1);
console.log(
  "Length of the longest substring without repeating characters:",
  length
);

// Task 8 Rotate an Array
function rotateArray(arr, k) {
  k = k % arr.length;

  let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));

  return rotatedArray;
}

let array8 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedArray = rotateArray(array8, k);
console.log("Rotated array:", rotatedArray);

// Task 9 Merge Sorted Array
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

let array9 = [1, 3, 5, 7];
let array10 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(array9, array10);
console.log("Merged array:", mergedArray);

// Task 10 Fibonacci Sequnce with DP
function fibonacci(n) {
  if (n <= 0) return [];

  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

let n = 10;
let fibonacciNumbers = fibonacci(n);
console.log("Fibonacci numbers:", fibonacciNumbers);

// Task 11 Knapsack problem using dynamic programming.
function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

let weights = [1, 2, 3, 8, 7, 4];
let values = [20, 5, 10, 40, 15, 25];
let capacity = 10;

let maxValue = knapsack(weights, values, capacity);
console.log("Maximum value that can be obtained:", maxValue);
