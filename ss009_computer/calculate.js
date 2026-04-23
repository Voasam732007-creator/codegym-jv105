const ADD = "Addition";
const SUB = "Subtraction";
const MUL = "Multiplication";
const DIV = "Division";
function calculate(type) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    if (type === ADD) {
        result = num1 + num2;
    }
    else if (type === SUB) {
        result = num1 - num2;
    }
    else if (type === MUL) {
        result = num1 * num2;
    }
    else if (type === DIV) {
        result = num1 / num2;
    }
    document.getElementById("result").innerHTML = result;
}
