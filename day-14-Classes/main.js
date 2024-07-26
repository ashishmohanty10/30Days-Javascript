// Task 1
class Person {
  constructor(firstName, lastName, name, age) {
    this.name = name;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    return `Hi ${this.name} and your age is ${this.age}`;
  }

  updateAge(newAge) {
    this.age = newAge;
    return `Hi ${this.name} and your age is ${this.age}`;
  }

  static genericGreeting() {
    return " Welcome .";
  }
}

const person = new Person("xyz", "43");

console.log(person.greet());

// Task 2
console.log(person.updateAge(46));

// Task 3

class Student extends Person {
  static numberOfStudents = 0;
  constructor(firstName, lastName, name, age, studentId) {
    super(firstName, lastName, name, age);
    this.studentId = studentId;

    Student.numberOfStudents++;
  }

  greet() {
    return `${super.greet()} My student ID is ${this.studentId}.`;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  static getNumberOfStudents() {
    return `Total number of students: ${Student.numberOfStudents}`;
  }
}
const student = new Student("Harry", 23, "fsdfsdf");
console.log(student.getStudentId());

// Task 4
console.log(student.greet());

// Task 5
console.log(Person.genericGreeting());

// Task 6
const student2 = new Student("Bob", 22, "S67890");
console.log(Student.getNumberOfStudents());

// Task 7
console.log(person.fullName);

// Task 8
const newPerson = new Person("John", "Doe", 40);
newPerson.fullName = "Jane Smith";
console.log(newPerson.fullName);

// Taks 9
class Account {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(1000);

myAccount.deposit(500);

myAccount.withdraw(200);

console.log(`Current balance: ${myAccount.getBalance()}`);

// Task 10
try {
  myAccount.withdraw(2000);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

try {
  myAccount.deposit(-50);
} catch (error) {
  console.log(`Error: ${error.message}`);
}
