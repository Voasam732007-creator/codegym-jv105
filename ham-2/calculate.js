function findSmallestNumber(
    firstValue,
    secondValue,
    thirdValue
) {

    let smallestNumber =
        firstValue;

    if (secondValue < smallestNumber) {
        smallestNumber =
            secondValue;
    }

    if (thirdValue < smallestNumber) {
        smallestNumber =
            thirdValue;
    }

    return smallestNumber;
}

function showSmallestNumber() {

    const firstNumber =
        document.getElementById("firstNumber");

    const secondNumber =
        document.getElementById("secondNumber");

    const thirdNumber =
        document.getElementById("thirdNumber");

    const resultText =
        document.getElementById("resultText");

    if (
        !firstNumber.value ||
        !secondNumber.value ||
        !thirdNumber.value
    ) {

        resultText.innerText =
            "Vui lòng nhập đầy đủ số";

        return;
    }

    const smallestNumber =
        findSmallestNumber(
            Number(firstNumber.value),
            Number(secondNumber.value),
            Number(thirdNumber.value)
        );

    resultText.innerText =
        `Số nhỏ nhất là ${smallestNumber}`;
}
