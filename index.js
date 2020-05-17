const form = document.querySelector(".task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-btn");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const msg = document.querySelector(".msg");

loadEventListeners();
function loadEventListeners() {
  form.addEventListener("submit", addTask);
}
function addTask(e) {
  e.preventDefault();
}
