function reverseList(arr) {
    const newArr = [...arr].reverse();

    return newArr;
}

function handleReverse() {
    const numbers = document.getElementById("numbers").value;
    const result = document.getElementById("result");

    const array = numbers.split(",").map(item => Number(item));

    const reversed = reverseList(array);

    result.innerText = `Reversed array: ${reversed.join(", ")}`;
}
