const analyzeArray = () => {
    const array = [5, 12, 8, 25, 3, 18, 7, 30, 14, 9];

    let max = array[0];
    let sum = 0;

    for (const num of array) {
        if (num > max) {
            max = num;
        }
        sum += num;
    }

    const average = sum / array.length;

    result.innerText =
        "Giá trị lớn nhất: " + max +
        " - Trung bình: " + average;
};
