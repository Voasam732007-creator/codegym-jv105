function isPositiveInteger(numberValue) {

    return Number.isInteger(numberValue)
        && numberValue > 0;
}

function showCheckResult() {

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

    const checkResult =
        isPositiveInteger(Number(currentNumber));

    resultText.innerText =
        `Kết quả: ${checkResult}`;
}
