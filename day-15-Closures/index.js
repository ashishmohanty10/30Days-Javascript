// Task 1
function outerFunction() {
  const a = 10;

  function innerfunction() {
    return a;
  }
  console.log(innerfunction());
}

outerFunction();

// Taks 2
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.getValue());
myCounter.increment();
console.log(myCounter.getValue());

// Task 3
function createUniqueIdGenerator() {
  const generatedIds = new Set(); // Set to store previously generated IDs

  return function () {
    let newId;
    do {
      newId = Math.random().toString(36).substr(2, 9);
    } while (generatedIds.has(newId));

    generatedIds.add(newId);
    return newId;
  };
}

const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId());
console.log(generateUniqueId());
console.log(generateUniqueId());

// Task 4
function createGreeter(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}

const greetJohn = createGreeter("John");
console.log(greetJohn());

const greetJane = createGreeter("Jane");
console.log(greetJane());

// Task 5
function createFunctionArray(size) {
  const functionArray = [];

  for (let i = 0; i < size; i++) {
    functionArray.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functionArray;
}

const functions = createFunctionArray(5);

functions[0]();
functions[1]();

// Taks 6
function createItemManager() {
  const items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return items.slice();
    },
  };
}

const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Orange");
console.log(itemManager.listItems());
itemManager.removeItem("Banana");
console.log(itemManager.listItems());

// Task 7
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));

const factorial1 = memoize(function (n) {
  if (n <= 1) return 1;
  return n * factorial1(n - 1);
});

console.log(factorial1(5));
console.log(factorial1(5));
console.log(factorial1(6));

// Task 8
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const factorial = memoize(function (n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
