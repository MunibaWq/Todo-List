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
  if (todo.deleted) {
    // remove the item from the DOM
    item.remove();
    return;
  }
  //check if the list has been checked == todo.checked is true
  //if so, assign 'done to 'isChecked'. Otherwise, assign an empty string
  const isChecked = todo.checked ? `done` : ``;

  const newListElement = document.createElement("li");
  //set attribute
  newListElement.setAttribute("class", "todo-item ${isChecked}");
  // Set the data-key attribute to the id of the todo
  newListElement.setAttribute("data-key", todo.id);
  if (isChecked !== `done`) {
    newListElement.innerHTML = `
        <input id= "${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class = "tick "></label>
         <label class="text" >${todo.text}</label>
        <button class="delete-todo js-delete-todo" onclick = "deleteItem (${todo.id})">X</button>
      
      `;
  }
  taskList.appendChild(newListElement);
  taskList.classList.add("btn-delete");

  // deleteBtn = document.querySelector(".js-delete-todo");
}
// function findObjectByKey(array, data-key, value) {
//   for (var i = 0; i < array.length; i++) {
//       if (array[i][data-key] === value) {
//           return array[i];
//       }
//   }
//   return null;
// }
// function deleteItem(id) {
//   taskList.removeChild(newListElement.id);
//   var lis = document.querySelectorAll('#myList li');
// for(var i=0; li=lis[i]; i++) {
//     li.parentNode.removeChild(li);
// }
// }

const list = document.querySelector(".js-todo-list");
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});
function deleteTodo(key) {
  // find the corresponding todo object in the todoItems array
  const index = todoItems.findIndex((item) => item.id === Number(key));
  // Create a new object with properties of the current todo item
  // and a `deleted` property which is set to true
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  // remove the todo item from the array by filtering it out
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}
// taskList.addEventListener("click", function () {
//   console.log(`delete list item`);
//   // if(text.)
// });
