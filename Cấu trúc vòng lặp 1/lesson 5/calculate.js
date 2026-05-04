const calculateSum = () => {
    let a = 0;
    let b = 1;
    let sum = 0;

    for (let i = 0; i < 20; i++) {
        sum += a;

        const next = a + b;
        a = b;
        b = next;
    }

    const result = `Sum of first 20 Fibonacci numbers is: ${sum}`;

    document.getElementById("result").innerText = result;
};