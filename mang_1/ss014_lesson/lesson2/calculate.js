function findMaxInArray() {
    const array = [5, 12, 8, 25, 3, 18, 7, 30, 14, 9];

    let maxValue = array[0];
    let position = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
            position = i;
        }
    }

    document.getElementById("result").innerText =
        "Giá trị lớn nhất: " + maxValue + " - Vị trí: " + position;
}
