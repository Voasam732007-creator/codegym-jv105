const reverseArray = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const reversed = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    result.innerText = "Mảng sau khi đảo: " + reversed.join(", ");
};
