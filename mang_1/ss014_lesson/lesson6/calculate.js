const findNumber = () => {
    const array = [1, 2, 3, 4, 5, 10, 20, 8, 9, 11];
    const v = +document.getElementById("number").value;

    if (array.includes(v)) {
        result.innerText = "V  is in the array";

    }else {
        result.innerText = "V  is not in the array";
        }
}
