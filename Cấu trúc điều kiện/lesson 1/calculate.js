function convert() {
    const c = Number(document.getElementById("celsius").value);
    const result = document.getElementById("result");

    if (isNaN(c)) {
        result.innerHTML = "Vui lòng nhập số hợp lệ!";
        return;
    }

    const f = c * 9 / 5 + 32;

    result.innerHTML = `${c}°C = ${f}°F`;
}
