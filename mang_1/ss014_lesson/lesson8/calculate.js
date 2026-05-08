const sortDescending = () => {
    const array = [3, 7, 12, 5, 9, 20, 15, 8, 1, 10];

    array.sort((a, b) => b - a);

    result.innerText = array.join(", ");
};
