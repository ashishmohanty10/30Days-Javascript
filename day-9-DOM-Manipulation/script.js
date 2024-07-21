// Task 1
const textChange = document.getElementById("changeText");
textChange.textContent = "New Text";

// Task 2
const changeBgc = document.getElementsByClassName("box");
changeBgc[0].style.backgroundColor = "red";

// Task 3
const newDiv1 = document.createElement("div");
newDiv1.innerText = "This is a new Div";
document.body.appendChild(newDiv1);

// Task 4
const ul = document.querySelector(".myClass");
const li = document.createElement("li");
li.appendChild(document.createTextNode("New li Element"));
ul.appendChild(li);

// Task 5
const removeDiv = document.getElementById("list1");
removeDiv.remove();

// Task 6
const parentUl = document.getElementById("mainUL");
const lastChild = parentUl.lastElementChild;
lastChild.remove();

// Task 7
const img = document.getElementById("img");
img.src =
  "https://images.unsplash.com/photo-1721269139566-bd31c81b3978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Task 8 :

// Task 9
const para = document.querySelector(".para");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  para.textContent = "This is a new Para";
});

// Task 10
const newDiv = document.querySelector(".changeBorder");
newDiv.addEventListener("mouseover", function () {
  newDiv.style.borderColor = "red";
});
