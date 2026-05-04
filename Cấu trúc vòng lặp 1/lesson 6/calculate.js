const calculateSum = () => {
    let count = 0;
    let number = 1;
    let sum = 0;

    while (count < 30) {
        if (number % 7 === 0) {
            sum += number;
            count++;
        }
        number++;
    }

    const result = `Tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên là: ${sum}`;

    document.getElementById("result").innerText = result;
};
