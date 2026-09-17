const balloon = document.getElementById("balloon");

let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

balloon.addEventListener("click", function () {

    size += 10;

    colorIndex = (colorIndex + 1) % 3;

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];

    if (size > 420) {
        size = 200;
        balloon.style.width = "200px";
        balloon.style.height = "200px";
    }
});

balloon.addEventListener("mouseleave", function () {

    size -= 5;

    if (size < 200) {
        size = 200;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});