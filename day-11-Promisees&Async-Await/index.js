// Task 1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is looged after 2 sec");
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});

// Task 2
const newPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This message is rejected after 2 sec");
  }, 2000);
});

newPro.catch((err) => {
  console.log(err);
});

// Task 3 Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

fetchData("Fetching data", 1000)
  .then((result) => {
    console.log(result);
    return fetchData("Feching user posts", 2000);
  })
  .then((result) => {
    console.log(result);
    return fetchData("Fetching user comments...", 1500);
  })
  .then((result) => {
    console.log(result);
    return fetchData("All data fetched successfully!", 500);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

function fetchData(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

async function logResolvedValue() {
  try {
    const result = await fetchData("Data fetched successfully!", 2000);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

logResolvedValue();

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

function dataFetching(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(message);
    }, delay);
  });
}

async function logRejecetdValue() {
  try {
    const result = dataFetching("Failed fetching data!", 1000);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Task 6 Use fetch API to get data from a public API and log the response data to the console using promises
function dataToBeFetched() {
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

dataToBeFetched();

// Task 7 Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function data() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error while fetching data", error);
  }
}
data();

// Task 8: Use Promise. all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve, reject) => {
  resolve("This is first resolved message");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is second resolved message");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is third resolved message");
  }, 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise4 = new Promise((resolve, reject) => {
  resolve("Promise resolved for pomise4");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved for pomise5");
  }, 1000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved for pomise6");
  }, 1500);
});

Promise.race([promise4, promise5, promise6])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
