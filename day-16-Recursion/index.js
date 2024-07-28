function factorialFunction(num) {
  return num === 0 ? 1 : num * factorialFunction(num - 1);
}
const result = factorialFunction(5);
console.log(result);

// Task 2
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const testCases = [0, 1, 2, 3, 5, 10, 15];
testCases.forEach((n) => {
  console.log(`Fibonacci number for n=${n}: ${fibonacci(n)}`);
});

// Task 3
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}

const testCases2 = [[], [1], [1, 2, 3, 4, 5], [10, -10, 20, -20, 30]];

testCases2.forEach((arr, index) => {
  console.log(`Sum of elements in array ${index + 1}: ${sumArray(arr)}`);
});

// Task 4
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
  }
}

const testCases3 = [
  [1],
  [1, 2, 3, 4, 5],
  [10, -10, 20, -20, 30],
  [-1, -2, -3, -4, -5],
  [100, 200, 3, 400, 50],
];

testCases3.forEach((arr, index) => {
  console.log(`Maximum element in array ${index + 1}: ${findMax(arr)}`);
});

// Task 5
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
}

const testCases4 = ["", "a", "hello", "JavaScript", "recursion"];

testCases4.forEach((str, _) => {
  console.log(`Reversed string for "${str}": "${reverseString(str)}"`);
});

// Task 6
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, -1));
  }
}

const testCases5 = ["", "a", "racecar", "hello", "madam", "step on no pets"];

testCases5.forEach((str, _) => {
  console.log(`Is "${str}" a palindrome? ${isPalindrome(str)}`);
});

// Task 7
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

const testCases6 = [
  { array: [], target: 1 },
  { array: [1, 2, 3, 4, 5], target: 3 },
  { array: [1, 2, 3, 4, 5], target: 6 },
  { array: [10, 20, 30, 40, 50], target: 10 },
  { array: [10, 20, 30, 40, 50], target: 50 },
  { array: [1, 3, 5, 7, 9, 11, 13], target: 7 },
];

testCases6.forEach(({ array, target }, index) => {
  const result = binarySearch(array, target);
  console.log(
    `Test case ${index + 1}: Searching for ${target} in ${JSON.stringify(
      array
    )} - Index: ${result}`
  );
});

// Task 8
function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  } else {
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
  }
}

const testCases7 = [
  { array: [], target: 1 },
  { array: [1, 2, 3, 4, 5], target: 3 },
  { array: [1, 1, 1, 1, 1], target: 1 },
  { array: [10, 20, 30, 40, 50], target: 25 },
  { array: [10, 20, 20, 20, 10], target: 20 },
  { array: [1, 3, 3, 7, 9, 11, 13], target: 3 },
];

testCases7.forEach(({ array, target }, index) => {
  const result = countOccurrences(array, target);
  console.log(
    `Test case ${
      index + 1
    }: Counting occurrences of ${target} in ${JSON.stringify(
      array
    )} - Count: ${result}`
  );
});

// Task 9
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);

// Task 10
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function calculateDepth(node) {
  if (node === null) {
    return 0;
  }

  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.right = new TreeNode(6);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);

const root3 = null;

console.log("Depth of binary tree 1:", calculateDepth(root1));
console.log("Depth of binary tree 2:", calculateDepth(root2));
console.log("Depth of binary tree 3:", calculateDepth(root3));
