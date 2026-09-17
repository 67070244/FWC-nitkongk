$("#calculate").click(function () {

    const a = Number($("#left").val());
    const b = Number($("#right").val());
    const operator = $("#operator").val();

    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        a < 0 ||
        b < 0
    ) {
        alert("Error :(");
        return;
    }

    if ((operator === "/" || operator === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;

        case "%":
            result = a % b;
            break;
    }

    const message = `${a} ${operator} ${b} = ${result}`;

    alert(message);
    console.log(message);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);