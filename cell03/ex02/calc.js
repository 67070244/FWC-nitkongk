const leftInput = document.getElementById("left");
const operatorInput = document.getElementById("operator");
const rightInput = document.getElementById("right");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function () {
    const a = Number(leftInput.value);
    const b = Number(rightInput.value);
    const operator = operatorInput.value;

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