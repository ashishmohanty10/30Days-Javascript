// Task 1 Program to check wheather a number is positive,negetive,zero
function checkNumber(num) {
  if (num < 0) {
    console.log("It is a negetive number");
  } else if (num > 0) {
    console.log("Its a positive number");
  } else {
    console.log("its Zero");
  }
}
checkNumber(-1);

// Task 2 Program to check if a person is eligible to vote (age>=18)
function checkAge(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
}
checkAge(19);

// Task 3 Prgram to find the largest of three number
function largestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log("first number is greater");
  } else if (b < a && b < c) {
    console.log("second number is greater");
  } else {
    console.log("third number is greater");
  }
}
largestNumber(2, 3, 4);

// Task 4 Program to determine the day of the week on a number(1-7)
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number. Please enter a number between 1 and 7.";
  }
}
getDayOfWeek(1);

// Task 5 Program to assign grades based on input using switch case
function assignGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Invalid marks. Marks should be between 0 and 100.";
  }

  switch (true) {
    case marks < 33:
      return "F";
    case marks < 45:
      return "D";
    case marks < 60:
      return "C";
    case marks < 75:
      return "B";
    default:
      return "A";
  }
}

console.log(assignGrade(56)); // Output: "C"

// Task 6 Program to check if a number is odd or even
function evenOdd(num) {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

// Task 7 Prgram to check leap year
function isLeapYear(year) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
    console.log(" Input year:", year, "is a Leap Year");
  else console.log(" Input year:", year, "is NOT a Leap Year");
}
isLeapYear(2020);
