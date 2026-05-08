const removeNumber = () => {
    const array = [3, 7, 12, 5, 9, 20, 15, 8, 1, 10];

    const v = +document.getElementById("number").value;

    const index = array.indexOf(v);

    if (index !== -1) {

        for (let i = index; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }

        array[array.length - 1] = 0;

        result.innerText = array.join(", ");
    } else {
        result.innerText = "V is not in the array";
    }
};
