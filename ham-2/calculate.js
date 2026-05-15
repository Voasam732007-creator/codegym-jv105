function isNumberCharacter(characterValue) {

    const numberList =
        "0123456789";

    return numberList.includes(characterValue);
}

function showCheckResult() {

    const characterInput =
        document.getElementById("characterInput");

    const resultText =
        document.getElementById("resultText");

    const currentCharacter =
        characterInput.value;

    if (!currentCharacter) {

        resultText.innerText =
            "Vui lòng nhập ký tự";

        return;
    }

    const checkResult =
        isNumberCharacter(currentCharacter);

    resultText.innerText =
        `Kết quả: ${checkResult}`;
}
