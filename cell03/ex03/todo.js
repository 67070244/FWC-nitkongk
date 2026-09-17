const list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

const COOKIE_NAME = "todo_list";

function saveTodos() {
    const todos = [];

    const items = list.querySelectorAll(".todo");

    items.forEach(function (item) {
        const text = item.querySelector(".todo-text").textContent;
        todos.push(text);
    });

    document.cookie =
        COOKIE_NAME + "=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=31536000; path=/";
}

function createTodo(text) {
    const todo = document.createElement("div");
    const textSpan = document.createElement("span");
    const removeBtn = document.createElement("button");

    todo.className = "todo";

    textSpan.className = "todo-text";
    textSpan.textContent = text;

    removeBtn.className = "remove-btn";
    removeBtn.textContent = "× Remove";

    removeBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        const confirmRemove = confirm(
            "Do you want to remove this TODO?"
        );

        if (confirmRemove) {
            todo.remove();
            saveTodos();
        }
    });

    todo.appendChild(textSpan);
    todo.appendChild(removeBtn);

    return todo;
}

newBtn.addEventListener("click", function () {
    const text = prompt("Enter a new TODO:");

    if (text === null) {
        return;
    }

    const todoText = text.trim();

    if (todoText === "") {
        return;
    }

    const todo = createTodo(todoText);
    
    list.prepend(todo);

    saveTodos();
});

function loadTodos() {
    const cookies = document.cookie.split("; ");

    const todoCookie = cookies.find(function (cookie) {
        return cookie.startsWith(COOKIE_NAME + "=");
    });

    if (!todoCookie) {
        return;
    }

    const value = todoCookie.substring(
        COOKIE_NAME.length + 1
    );

    try {
        const todos = JSON.parse(
            decodeURIComponent(value)
        );

        todos.reverse().forEach(function (text) {
            const todo = createTodo(text);
            list.prepend(todo);
        });

    } catch (error) {
        console.error("Invalid TODO cookie.");
    }
}
loadTodos();