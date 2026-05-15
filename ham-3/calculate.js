function calculateFactorial(numberValue) {

    let factorialResult = 1;

    for (
        let i = 1;i <= numberValue; i++) {
        factorialResult *= i;
    }

    return factorialResult;
}

function showFactorialResult() {

    const numberInput =
        document.getElementById("numberInput");

    const resultText =
        document.getElementById("resultText");

    const currentNumber =
        numberInput.value;

    if (!currentNumber) {

        resultText.innerText =
            "Vui lòng nhập số";

        return;
    }

    const factorialResult =
        calculateFactorial(Number(currentNumber));

    resultText.innerText =
        `Giai thừa của ${currentNumber} là ${factorialResult}`;
}
