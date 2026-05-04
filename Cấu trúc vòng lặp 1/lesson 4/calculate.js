const findFib = () => {
    let a = 0;
    let b = 1;

    let result = "";

    while (true) {
        const next = a + b;
        a = b;
        b = next;

        if (a % 5 === 0) {
            result = `số đầu tiên trong dãy fibonacci chia hết cho 5 là: ${a}`;
            break;
        }
    }

    document.getElementById("result").innerText = result;
};