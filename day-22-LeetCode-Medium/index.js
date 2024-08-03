// Task 1
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    // Get the values from the current nodes
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // Calculate the sum of the two digits and the carry
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    // Create a new node with the sum and attach it to the result list
    current.next = new ListNode(sum);
    current = current.next;

    // Move to the next nodes in the input lists
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
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
let l1 = arrayToList([2, 4, 3]); // Represents 342
let l2 = arrayToList([5, 6, 4]); // Represents 465

let sumList = addTwoNumbers(l1, l2);
printList(sumList); // Output: 7 -> 0 -> 8 (Represents 807)

let l3 = arrayToList([0]);
let l4 = arrayToList([0]);

let sumList2 = addTwoNumbers(l3, l4);
printList(sumList2); // Output: 0

let l5 = arrayToList([9, 9, 9, 9, 9, 9, 9]); // Represents 9999999
let l6 = arrayToList([1]); // Represents 1

let sumList3 = addTwoNumbers(l5, l6);
printList(sumList3); // Output: 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 1 (Represents 10000000)

// Task 2
function lengthOfLongestSubstring(s) {
  let charIndexMap = new Map();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If the character is already in the map and is within the current window
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      // Move the start pointer to the right of the last occurrence of the current character
      start = charIndexMap.get(char) + 1;
    }

    // Update or add the current character's index in the map
    charIndexMap.set(char, end);

    // Update the maximum length of substring found
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("")); // Output: 0 (Empty string)
console.log(lengthOfLongestSubstring("a")); // Output: 1 (Single character)
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3 ("vdf")

// Task 3
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Calculate the width and the height of the container
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);

    // Calculate the area
    const area = width * minHeight;

    // Update the maximum area if the current area is larger
    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2
console.log(maxArea([5, 5, 5, 5])); // Output: 15

// Task 4
function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the fixed element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values for the left pointer
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate values for the right pointer
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0, 0])); // Output: [[0, 0, 0]]
console.log(threeSum([1, 2, -2, -1])); // Output: []
console.log(threeSum([])); // Output: []
console.log(threeSum([-1, 0, 1, 0])); // Output: [[-1, 0, 1]]

// Task 5
function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (const str of strs) {
    // Sort the string to get the key for the anagram group
    const sortedStr = str.split("").sort().join("");

    // If the sorted key does not exist in the map, create a new array for it
    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, []);
    }

    // Add the original string to the corresponding anagram group
    anagramMap.get(sortedStr).push(str);
  }

  // Convert the map values to an array of arrays
  return Array.from(anagramMap.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ]

console.log(groupAnagrams([""])); // Output: [ [''] ]
console.log(groupAnagrams(["a"])); // Output: [ ['a'] ]
console.log(groupAnagrams(["abc", "bca", "cab", "def", "fed"]));
// Output: [ ['abc', 'bca', 'cab'], ['def', 'fed'] ]
