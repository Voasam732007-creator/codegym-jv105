const calculateFactorial = () => {
    const n = +document.getElementById("number").value;

    if (n < 0) {
        document.getElementById("result").innerText = "Vui lòng nhập số >= 0";
        return;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    document.getElementById("result").innerText = `Giai thừa = ${result}`;
};
