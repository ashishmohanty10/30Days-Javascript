//Task 1 Prgram to add to number and log it
function addTwoNumber(a, b) {
  const result = a + b;
  console.log(result);
}
console.log(addTwoNumber(2, 2));

//Task 2 Prgram to subtract to number and log it
function subtractTwoNUmber(a, b) {
  const result = a - b;
  console.log(result);
}
console.log(subtractTwoNUmber(2, 2));

//Task 3 Prgram to multiply to number and log it
function multiplyTwoNumber(a, b) {
  const result = a * b;
  console.log(result);
}
console.log(multiplyTwoNumber(2, 2));

//Task 4 Prgram to divide to number and log it
function divideTwoNumber(a, b) {
  const result = a / b;
  console.log(result);
}
console.log(divideTwoNumber(2, 2));

//Task 5 Prgram to find reminder to number and log it
function reminderOfTwoNumber(a, b) {
  const result = a % b;
  console.log(result);
}
console.log(reminderOfTwoNumber(2, 2));

//Task 6 += operator
function task6() {
  let x = 10;
  x += 5;
  console.log(x);
}
console.log(task6());

//Task 7 -= operator
function task7() {
  let x = 10;
  x -= 5;
  console.log(x);
}
console.log(task7());

//Task 8 Program to compare two number using > and < and log it
function biggestNumber(a, b) {
  if (a > b) {
    console.log("a is bigger than b");
  } else if (a < b) {
    console.log("b is greater");
  }
}
console.log(biggestNumber(2, 3));

// Task 9 Program to compare two nubmer using  >= and  <= and log it
function canGoCollege(age) {
  if (age >= 17) {
    console.log("u can go do underGraduate");
  } else if (age <= 35) {
    console.log("u can do post graduate");
  } else {
    console.log("Sorry u cant do anything");
  }
}
console.log(canGoCollege(19));

//Task 10 Program to compare two number using == and === and log it
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
console.log(sameValueZero(o, 0));

//Task 11 and operator
function andOperator(a, b) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("number is divisible by 3 and 5");
  } else {
    console.log("Not divisible");
  }
}

//Task 12 || operator
function chooseCollege(marks) {
  let totalMarks = 600;
  if (marks >= 500 || marks < 550) {
    console.log("Can get a good college");
  } else if (marks >= 550 || marks < 599) {
    console.log("can get a very good collge");
  } else {
    console.log("u will get a mid level college");
  }
}
console.log(chooseCollege(549));

//Task 13 !operator
function login(userId) {
  if (!userId) {
    return "Cant Log in";
  } else {
    return "redirected";
  }
}
console.log(login(123));

//Task 14 ternary operator
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true));
