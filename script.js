let deleteBtn;
const inputTitle = document.querySelector("#myInput");
const taskList = document.querySelector(".js-todo-list");
const addBtn = document.querySelector(".btn-add");

//This is the array that will hold the todo list items
const todoItems = [];

addBtn.addEventListener("click", function () {
  const titleMain = inputTitle.value.trim();
  if (titleMain !== "") {
    addTodo(titleMain);
    inputTitle.value = "";
  }
});

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
         <label class="text" >${todo.text}</label>
        <button class="delete-todo js-delete-todo" onclick = "deleteItem (${todo.id})")>X</button>
      
      `;
  }
  taskList.appendChild(newListElement);
  taskList.classList.add("btn-delete");

  deleteBtn = document.querySelector(".js-delete-todo");
}
function deleteItem(id) {
  taskList.removeChild(id);
  console.log(id);
}

// taskList.addEventListener("click", function () {
//   console.log(`delete list item`);
//   // if(text.)
// });
