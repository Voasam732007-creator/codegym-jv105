function countCharacter(arr, char) {
    let count = 0;

    for (const item of arr) {
        if (item.trim() === char) {
            count++;
        }
    }

    return count > 0 ? count : -1;
}

function checkChar() {
    const arrayInput = document.getElementById("arrayInput").value;
    const charInput = document.getElementById("charInput").value;
    const result = document.getElementById("result");

    const arr = arrayInput.split(",");
    const answer = countCharacter(arr, charInput);

    result.innerText = `Result: ${answer}`;
}
