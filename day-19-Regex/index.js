// Task 1
const text1 = "JavaScript is a versatile language. I love JavaScript!";
const regex1 = /JavaScript/g;
const matches1 = text1.match(regex1);
console.log(matches1);

// Task 2
const text2 = "My phone number is 123-456-7890 and my postal code is 98765.";
const regex2 = /\d+/g;
const matches2 = text2.match(regex2);
console.log(matches2);

// Task 3
const text3 =
  "JavaScript is a versatile language. I love JavaScript and OpenAI.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text3.match(regex3);
console.log(matches3);

// Task 4
const text4 = "My phone number is 123-456-7890 and my postal code is 98765.";
const regex4 = /\d+/g;
const matches4 = text4.match(regex4);
console.log(matches4);

// Task 5
const sampleText5 = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = sampleText5.match(regex5);
if (matches5) {
  const areaCode = matches5[1];
  const centralOfficeCode = matches5[2];
  const lineNumber = matches5[3];

  console.log("Area Code:", areaCode);
  console.log("Central Office Code:", centralOfficeCode);
  console.log("Line Number:", lineNumber);
} else {
  console.log("No matches found");
}

// Task 6
const sampleEmail1 = "username@example.com";
const regex6 = /^([^@]+)@([^@]+)$/;
const matches6 = sampleEmail1.match(regex6);
if (matches6) {
  const username = matches6[1];
  const domain = matches6[2];

  console.log("Username:", username);
  console.log("Domain:", domain);
} else {
  console.log("No matches found");
}

// Task 7
const sampleText1 = "Hello world, this is a test.";
const sampleText2 = "world, this is a test.";
const regex = /^\w+/;
const matches7 = sampleText1.match(regex);
const matches8 = sampleText2.match(regex);

console.log("Matches for sampleText1:", matches7);
console.log("Matches for sampleText2:", matches8);

// Task 8
const exampleText1 = "This is a test sentence end";
const exampleText2 = "Another example sentence endof";
const endOfStringRegex = /\b\w+$/;
const matchesText1 = exampleText1.match(endOfStringRegex);
const matchesText2 = exampleText2.match(endOfStringRegex);
console.log("Matches for exampleText1:", matchesText1);
console.log("Matches for exampleText2:", matchesText2);

// Task 9
const password1 = "Password123!";
const password2 = "password";

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(password) {
  return passwordRegex.test(password);
}

console.log("Is password1 valid?", validatePassword(password1));
console.log("Is password2 valid?", validatePassword(password2));

// Task 10
const url1 = "https://www.example.com";
const url2 = "ftp://example.com/resource";
const url3 = "http://localhost:8080";
const url4 = "invalid-url";

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

function validateURL(url) {
  return urlRegex.test(url);
}

console.log("Is url1 valid?", validateURL(url1));
console.log("Is url2 valid?", validateURL(url2));
console.log("Is url3 valid?", validateURL(url3));
console.log("Is url4 valid?", validateURL(url4));
