function convert() {
    const m = Number(document.getElementById("meter").value);
    const result = document.getElementById("result");

    if (isNaN(m)) {
        result.innerHTML = "Vui lòng nhập số hợp lệ!";
        return;
    }

    let ft = m * 3.2808;

    result.innerHTML = `${m} m = ${ft} ft`;
}