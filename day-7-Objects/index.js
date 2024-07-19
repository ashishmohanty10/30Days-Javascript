// Task 1 Create an object representing a book with properties like title, author, year and log it
const book = {
  title: "The Book",
  author: "The Author",
  year: 2000,
};
console.log(book);

// Task 2 Access and log the title and author properties of the book object
const bookTitle = book.title;
const authorOfTheBook = book.author;
console.log(bookTitle, authorOfTheBook);

// Task 3 Add a method to the book object that returns with book's title and author and log the result
function createBook(title, author) {
  return {
    title: title,
    author: author,
    getTitleAndAuthor: function () {
      return `${this.title} by ${this.author}`;
    },
  };
}

let mybook = createBook("Book 2", "Author 2");
function logTitileAndAuthor(book) {
  console.log(book.getTitleAndAuthor());
}

logTitileAndAuthor(mybook);

// Task 4 Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
    getTitleAndAuthor: function () {
      return `${this.title} by ${this.author}`;
    },
    updatedYear: function (newYear) {
      this.year = newYear;
    },
  };
}

let myBooks = createBook("1984", "George Orwell", 1949);
function logBookDetails(book) {
  console.log(book);
}

myBooks.updatedYear(1984);
logBookDetails(myBooks);

// Task 5 Create an nested object representing  a  library with properties like name and books (an array of book objects ) abd log the library object to the console
const library = {
  name: "Book Store",
  books: [
    { title: "Book1", author: "Author1", year: 2021 },
    { title: "Book2", author: "Author2", year: 2022 },
    { title: "Book3", author: "Author3", year: 2023 },
  ],
};
console.log(library);

// Task 6 Access and log the name of teh library and title
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);

library.books.forEach((book) => {
  book.getTitleAndYear = function () {
    return `Book title: ${this.title} and book year: ${this.year}`;
  };
});

// Task 7
library.books.forEach((book) => {
  console.log(book.getTitleAndYear());
});

console.log("\n");

// Task 8 Use for...in loop
for (let i = 0; i < library.books.length; i++) {
  const book = library.books[i];
  console.log(`Book ${i + 1}:`);
  for (let property in book) {
    console.log(`${property} is ${book[property]}`);
  }
}

console.log("\n");

// Taks 9 Use Object.keys and Object.values method
for (const book of library.books) {
  console.log("Book ");
  console.log(` Keys: ${Object.keys(book).join(", ")}`);
  console.log(` Keys: ${Object.values(book).join(", ")}`);
}
