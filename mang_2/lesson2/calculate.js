function increaseNumber(number) {
    return number + 1;
}

function showResult() {
    const number = Number(document.getElementById("numberInput").value);

    const result = increaseNumber(number);

    document.getElementById("result").innerText =
        `Kết quả: ${result}`;
}
