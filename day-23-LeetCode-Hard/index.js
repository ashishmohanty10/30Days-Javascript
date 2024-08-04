// Task 1
function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let x = nums1.length;
  let y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minX = partitionX === x ? Infinity : nums1[partitionX];

    let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2.0;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted correctly.");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6])); // Output: 3.5

// Task 2
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  // Function to compare two ListNodes
  function ListNodeComparator(a, b) {
    return a.val - b.val;
  }

  const minHeap = new MinHeap(ListNodeComparator);

  // Initialize the heap with the first node of each list
  for (let list of lists) {
    if (list !== null) {
      minHeap.insert(list);
    }
  }

  const dummy = new ListNode();
  let current = dummy;

  while (minHeap.size() > 0) {
    const node = minHeap.extractMin();
    current.next = node;
    current = current.next;

    if (node.next !== null) {
      minHeap.insert(node.next);
    }
  }

  return dummy.next;
}

// Min-Heap implementation
class MinHeap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  insert(node) {
    this.heap.push(node);
    this._heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const minNode = this.heap[0];
    const endNode = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = endNode;
      this._heapifyDown(0);
    }
    return minNode;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (
      index > 0 &&
      this.comparator(this.heap[index], this.heap[parentIndex]) < 0
    ) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this._heapifyUp(parentIndex);
    }
  }

  _heapifyDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftIndex < this.heap.length &&
      this.comparator(this.heap[leftIndex], this.heap[smallest]) < 0
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.comparator(this.heap[rightIndex], this.heap[smallest]) < 0
    ) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this._heapifyDown(smallest);
    }
  }
}

// Helper function to print the linked list
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// Helper function to create a linked list from an array
function createList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
}

// Test cases
const list1 = createList([1, 4, 5]);
const list2 = createList([1, 3, 4]);
const list3 = createList([2, 6]);

const mergedList = mergeKLists([list1, list2, list3]);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Task 3
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let left_max = 0;
  let right_max = 0;
  let waterTrapped = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        waterTrapped += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        waterTrapped += right_max - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 0, 2, 0, 1, 0, 1, 3])); // Output: 4
console.log(trap([0, 1, 0, 0, 2, 1, 0, 1, 0, 1])); // Output: 4
console.log(trap([1, 2, 3, 4, 5])); // Output: 0 (no trapped water)

// Task 4
function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function backtrack(row, columns, diag1, diag2) {
    if (row === n) {
      results.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col;
      const d2 = row + col;

      if (columns.has(col) || diag1.has(d1) || diag2.has(d2)) continue;

      board[row][col] = "Q";
      columns.add(col);
      diag1.add(d1);
      diag2.add(d2);

      backtrack(row + 1, columns, diag1, diag2);

      board[row][col] = ".";
      columns.delete(col);
      diag1.delete(d1);
      diag2.delete(d2);
    }
  }

  backtrack(0, new Set(), new Set(), new Set());
  return results;
}

// Helper function to log solutions in a readable format
function logSolutions(solutions) {
  solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach((row) => console.log(row));
    console.log("");
  });
}

// Test cases
const solutions4 = solveNQueens(4);
logSolutions(solutions4);
// Expected output: Solutions for 4-Queens problem

const solutions8 = solveNQueens(8);
logSolutions(solutions8);
// Expected output: Solutions for 8-Queens problem

// Task 5
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]]; // Queue stores [currentWord, currentLength]
  const visited = new Set();
  visited.add(beginWord);

  while (queue.length > 0) {
    const [currentWord, currentLength] = queue.shift();

    if (currentWord === endWord) return currentLength;

    for (let i = 0; i < currentWord.length; i++) {
      const originalChar = currentWord[i];
      for (let charCode = 97; charCode <= 122; charCode++) {
        const newChar = String.fromCharCode(charCode);
        if (newChar === originalChar) continue;

        const newWord =
          currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          queue.push([newWord, currentLength + 1]);
          visited.add(newWord);
        }
      }
    }
  }

  return 0; // No transformation sequence found
}

// Test cases
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0 (endWord not in wordList)
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Output: 2
console.log(ladderLength("a", "c", ["a", "b"])); // Output: 0 (no transformation path to "c")
