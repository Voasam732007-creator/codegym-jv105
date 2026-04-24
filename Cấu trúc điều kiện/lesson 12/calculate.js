function calc() {
    const P = +document.getElementById("money").value;
    const n = +document.getElementById("month").value;
    const rPercent = +document.getElementById("rate").value;
    const result = document.getElementById("result");

    if (isNaN(P) || isNaN(n) || isNaN(rPercent) || P <= 0 || n <= 0 || rPercent < 0) {
        result.innerHTML = "Nhập hợp lệ!";
        return;
    }

    const r = rPercent / 100;

    let A = P * Math.pow(1 + r, n);

    result.innerHTML = `Số tiền sau ${n} tháng = ${A}`;
}