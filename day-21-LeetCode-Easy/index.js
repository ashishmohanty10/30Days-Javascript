//Task 1
function twoSum(nums, target) {
  const numToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }

    numToIndex.set(num, i);
  }

  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([1, 5, 7, 9], 12)); // Output: [1, 2]
console.log(twoSum([0, -1, 2, -3, 1], -2)); // Output: [1, 4]

// Task 2
function reverseInteger(x) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  const sign = Math.sign(x);
  x = Math.abs(x);

  let reversed = 0;
  while (x > 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);

    if (reversed > (INT_MAX - digit) / 10) {
      return 0;
    }
    reversed = reversed * 10 + digit;
  }

  reversed *= sign;

  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0;
  }

  return reversed;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(0)); // Output: 0
console.log(reverseInteger(1534236469)); // Output: 0 (Overflow case)

// Task 3
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(1221)); // Output: true
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(123456)); // Output: false
console.log(isPalindrome(0)); // Output: true

// Task 4
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach the remaining elements from l1 or l2
  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return dummy.next;
}

// Helper function to convert an array to a linked list
function arrayToList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print a linked list
function printList(node) {
  let result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(" -> "));
}

// Test cases
let l1 = arrayToList([1, 2, 4]);
let l2 = arrayToList([1, 3, 4]);

let mergedList = mergeTwoLists(l1, l2);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

let l3 = arrayToList([]);
let l4 = arrayToList([0]);

let mergedList2 = mergeTwoLists(l3, l4);
printList(mergedList2); // Output: 0

let l5 = arrayToList([1]);
let l6 = arrayToList([2]);

let mergedList3 = mergeTwoLists(l5, l6);
printList(mergedList3); // Output: 1 -> 2

// Task 5
function isValid(s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (const char of s) {
    if (bracketMap[char]) {
      stack.push(char);
    } else {
      const topElement = stack.pop();
      if (bracketMap[topElement] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
console.log(isValid("")); // Output: true (Empty string is considered valid)
