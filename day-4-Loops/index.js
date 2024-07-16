// Task 1 Program to print numbers from 1 to 10 using for loops
function printNumber() {
  let num = 10;
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
printNumber();

// Task 2 Program to print multiplication table of 5 using a for loop
function multiplication() {
  num = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`5*${i} = ${num * i}`);
  }
}
multiplication();

// Task 3 Print the sum of 1-10 using while loop
function sumOfNumbers() {
  sum = 0;
  let i = 1;
  while (i <= 10) {
    sum = sum + i;
    i++;
    console.log(sum);
  }
}
sumOfNumbers();

// Task 4 Program to print 10-1 using while loop
function revNumber() {
  let i = 10;

  while (i >= 1) {
    console.log(i);
    i--;
  }
}
revNumber();

// Task 5 Program to print number from 1-5 using do-while loop
function printNumber() {
  let i = 0;
  let result = 0;
  do {
    i += 1;
    result = result + i;
    console.log(i);
  } while (i < 5);
}
printNumber();

// Task 6 Program to print factorial of a number using do while loop
function factorial(num) {
  let factorial = 1;
  let i = num;
  do {
    factorial = factorial * i;
    i--;
  } while (i >= 1);
  return console.log(factorial);
}
factorial(5);

// Task 7 Nested loop
function printPattern() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printPattern();
