let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let edittask = null;

function todo() {
  if (input.value == "") {
    alert("write something to add a task");
  } else if (edittask) {
    let inputVlaue = input.value.trim();
    edittask.textContent = inputVlaue;
    edittask = null;
    button.textContent = "add";
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.classList.add("span2");
    span.innerHTML = input.value;
    li.innerHTML = ` <i class="fas fa-edit edit"></i><i class="fa-solid fa-trash delete"></i><span class="span"></span>`;
    li.appendChild(span);
    ul.prepend(li);
    saveData();
  }
  input.value = "";
}

input.addEventListener("keydown", function (element) {
  if (element.key == "Enter") {
    todo();
  }
});

ul.addEventListener("click", function (element) {
  if (element.target.tagName == "SPAN") {
    element.target.classList.toggle("complete");
    saveData();
  } else if (element.target.classList.contains("delete")) {
    element.target.parentElement.remove();
    saveData();
  } else if (element.target.classList.contains("edit")) {
    edittask = document.querySelector(".span2");
    input.value = edittask.textContent.trim();
    button.textContent = "Update";
  }
});

function saveData() {
  localStorage.setItem("todo", ul.innerHTML);
}

function showTask() {
  ul.innerHTML = localStorage.getItem("todo");
}

showTask();
