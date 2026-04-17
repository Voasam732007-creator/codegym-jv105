function calculate(type) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    if (type === "Addition") {
        result = num1 + num2;
    }
    else if (type === "Subtraction") {
        result = num1 - num2;
    }
    else if (type === "Multiplication") {
        result = num1 * num2;
    }
    else if (type === "Division") {
        result = num1 / num2;
    }

    console.log(result);
}