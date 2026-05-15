function calculateSquare(numberValue) {
    return numberValue * numberValue;
}

function showSquareResult() {

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

    const squareResult =
        calculateSquare(Number(currentNumber));

    resultText.innerText =
        `Bình phương của ${currentNumber} là ${squareResult}`;
}
