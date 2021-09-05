const todoForm = document.getElementById("todoForm")
const inputTodo = document.querySelector("#todoForm input")
const todo = document.getElementById("todo")

const TODOS_KEY = "todos"

let todos = []

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id != parseInt(li.id))
    saveTodo()
}

function showTodo(doing) {
    const li = document.createElement("li")
    li.id = doing.id
    const span = document.createElement("span")
    span.innerHTML = doing.text;
    const btn = document.createElement("button")
    btn.innerHTML = "❌"
    btn.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(btn)
    todo.appendChild(li)
}

function updateTodo(e) {    
    e.preventDefault()
    const doing = inputTodo.value
    inputTodo.value = ""
    const newTodoObj = {
        text: doing,
        id: Date.now()
    };
    todos.push(newTodoObj)
    showTodo(newTodoObj)
    saveTodo()
}

todoForm.addEventListener("submit", updateTodo)

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(showTodo)
}