const findNumber = () => {
    const numbers = [1, 2, 3, 4, 5, 10, 20, 8, 9, 11];
    const inputNumber = +document.getElementById("number").value;

    if (numbers.includes(inputNumber)) {
        result.innerText = "V is in the array";
    } else {
        result.innerText = "V is not in the array";
    }
}
