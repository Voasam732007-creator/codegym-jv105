function compareNumbers(number1, number2) {

    if (number1 > number2) {
        alert("Số thứ nhất lớn hơn số thứ hai");
    } else {
        return number1 + number2;
    }

}

function checkNumbers() {

    const number1 = Number(document.getElementById("number1").value);

    const number2 = Number(document.getElementById("number2").value);

    const result = compareNumbers(number1, number2);

    if (result !== undefined) {
        document.getElementById("result").innerText =
            `Tổng hai số là: ${result}`;
    }

}
