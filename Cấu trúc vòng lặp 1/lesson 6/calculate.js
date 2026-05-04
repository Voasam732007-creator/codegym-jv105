const calculateSum = () => {
    const TOTAL_COUNT = 30;
    const DIVISOR = 7;
    const START_NUMBER = 1;

    let count = 0;
    let number = START_NUMBER;
    let sum = 0;

    while (count < TOTAL_COUNT) {
        if (number % DIVISOR === 0) {
            sum += number;
            count++;
        }
        number++;
    }

    const result = `Tổng của ${TOTAL_COUNT} số chia hết cho ${DIVISOR} đầu tiên trong các số tự nhiên là: ${sum}`;

    document.getElementById("result").innerText = result;
};
