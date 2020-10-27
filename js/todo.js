const todoText = document.getElementById("todo-text");
const todoBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");

if (localStorage.Todo != null)
    todoList.innerHTML = localStorage.Todo;


todoForm.onsubmit = (event) => {
    event.preventDefault();
    let li = todoText.value;
    if (li) {
        todoList.innerHTML += `<li><input type="checkbox"> ${li} <a href="#" class="remove">x</a><hr></li>`
        localStorage.Todo = todoList.innerHTML;
    }
    todoText.value = "";
}

todoList.onchange = (event) => {
    //Checkbox
    
    if (event.target.checked) {
        event.target.parentElement.style.textDecoration = "line-through";
        event.target.setAttribute("checked", true);
        localStorage.Todo = todoList.innerHTML;
    }
    else {
        event.target.parentElement.style.textDecoration = "none";
        event.target.removeAttribute("checked");
        localStorage.Todo = todoList.innerHTML;
    }
}

todoList.onclick = (event) => {
    const hasRemove = event.target.classList.contains('remove');

    if (hasRemove) {
        event.target.parentElement.remove();
        localStorage.Todo = todoList.innerHTML;
    }
}



