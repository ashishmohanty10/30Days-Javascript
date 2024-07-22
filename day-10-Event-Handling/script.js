// Task 1
const para = document.querySelector(".para");
const btn = document.querySelector(".clickBtn");

btn.addEventListener("click", function () {
  para.textContent = "This para is changed ";
});

// Task 2
const imgToBeChanged = document.getElementById("imgVisibility");
const btnToChangeVisibility = document.getElementById("changeVisibily");

btnToChangeVisibility.addEventListener("dblclick", function () {
  imgToBeChanged.style.opacity = 0.5;
});

// Task 3
const changeBG = document.querySelector(".bgChange");

changeBG.addEventListener("mouseover", function () {
  changeBG.style.backgroundColor = "red";
});

// Task 4
changeBG.addEventListener("mouseout", function () {
  changeBG.style.backgroundColor = "black";
});

// Task 5
const mappedInput = document.getElementById("inputMapped");

mappedInput.addEventListener("keydown", function () {
  console.log(mappedInput.value);
});

// Task 6
const dropdown = document.getElementById("dropdown");
const display = document.getElementById("display");

dropdown.addEventListener("change", function () {
  display.textContent = `Selected value: ${dropdown.value}`;
});

// Task 7
const form = document.getElementById("form");
const formInput = document.getElementById("formInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(formInput.value);
});

// Task 8
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedPara = document.getElementById("selectedPara");

dropdownOptions.addEventListener("click", function () {
  selectedPara.textContent = `You chose: ${dropdownOptions.value}`;
});

// Task 9
const listItem = document.querySelectorAll(".list");

listItem.forEach(function (listItem) {
  listItem.addEventListener("click", function () {
    console.log(listItem.textContent);
  });
});

// Task 10
const parentList = document.getElementById("parentList");

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  const newListItem = document.createElement("li");
  newListItem.className = "list";
  newListItem.textContent = `List ${parentList.children.length + 1}`;
  parentList.appendChild(newListItem);
});
