let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

$("#balloon").click(function () {
    size += 10;

    colorIndex = (colorIndex + 1) % 3;

    $("#balloon").css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[colorIndex]
    });

    if (size > 420) {
        size = 200;

        $("#balloon").css({
            width: "200px",
            height: "200px"
        });
    }
});

$("#balloon").mouseleave(function () {
    size -= 5;

    if (size < 200) {
        size = 200;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;

    $("#balloon").css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[colorIndex]
    });
});