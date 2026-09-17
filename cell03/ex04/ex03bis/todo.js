const COOKIE_NAME = "todo_list";

function saveTodos() {
    const todos = [];

    $("#ft_list .todo").each(function () {
        const text = $(this).find(".todo-text").text();
        todos.push(text);
    });

    document.cookie =
        COOKIE_NAME + "=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=31536000; path=/";
}

function createTodo(text) {
    const $todo = $("<div>", {
        class: "todo"
    });

    const $text = $("<span>", {
        class: "todo-text",
        text: text
    });

    const $removeBtn = $("<button>", {
        class: "remove-btn",
        text: "× Remove"
    });

    /* Remove button */
    $removeBtn.on("click", function (event) {
        event.stopPropagation();

        const confirmRemove = confirm(
            "Do you want to remove this TODO?"
        );

        if (confirmRemove) {
            $todo.remove();
            saveTodos();
        }
    });

    $todo.append($text);
    $todo.append($removeBtn);

    return $todo;
}

$("#newBtn").on("click", function () {
    const text = prompt("Enter a new TODO:");

    if (text === null) {
        return;
    }

    const todoText = text.trim();

    if (todoText === "") {
        return;
    }

    const $todo = createTodo(todoText);

    $("#ft_list").prepend($todo);

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
            const $todo = createTodo(text);
            $("#ft_list").prepend($todo);
        });

    } catch (error) {
        console.error("Invalid TODO cookie.");
    }
}

loadTodos();