const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function Delete(event){
    const li = event.target.parentElement;
    li.remove();
}
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = " 삭제";
    button.addEventListener("click", Delete);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function ToDo(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    parseToDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", ToDo);

let savedToDos = localStorage.getItem("todos");

if(savedToDos!==null){
    toDos = JSON.parse(savedToDos);
    parseToDos.forEach(paintTodo);
}