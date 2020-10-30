const inputTitle = document.querySelector("#myInput");
const taskList = document.querySelector(".js-todo-list");
const addBtn = document.querySelector(".btn-add");

//This is the array that will hold the todo list items
const todoItems = [];

//this function will create a new todo object based on the
//text that was entered in the text input, and push it into
//the 'todoItems' array
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  todoItems.push(todo);
  displayTodo(todo);
  console.log(todoItems);
}

function displayTodo(todo) {
  console.log(todo);
  //check if the list has been checked == todo.checked is true
  //if so, assign 'done to 'isChecked'. Otherwise, assign an empty string
  const isChecked = todo.checked ? `done` : ``;

  const newListElement = document.createElement("li");
  if (isChecked !== `done`) {
    newListElement.innerHTML = `
        <input id= "${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class = "tick "></label>
        <span class="text" >${todo.text}</span>
        <button class="delete-todo js-delete-todo">X</button>
      
      `;
    // newListElement.add(".btn-delete");
  }
  taskList.appendChild(newListElement);
  taskList.classList.add("btn-delete");
}
addBtn.addEventListener("click", function () {
  const titleMain = inputTitle.value.trim();
  if (titleMain !== "") {
    addTodo(titleMain);
    inputTitle.value = "";
  }
});
