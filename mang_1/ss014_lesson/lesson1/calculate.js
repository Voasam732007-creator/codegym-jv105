const run = () => {
    const arr = [3, 15, 7, 22, 9, 10, 11, 5, 18, 2];

    let count = 0;

    for (const num of arr) {
        if (num >= 10) {
            count++;
        }
    }

    result.innerText = "Số phần tử >= 10: " + count;
};
