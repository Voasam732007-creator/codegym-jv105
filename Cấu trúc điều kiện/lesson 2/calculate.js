function convert() {
    const m = Number(document.getElementById("meter").value);
    const result = document.getElementById("result");
    const METER_TO_FEET = 3.2808;
    if (isNaN(m)) {
        result.innerHTML = "Vui lòng nhập số hợp lệ!";
        return;
    }

    let ft = m * METER_TO_FEET;

    result.innerHTML = `${m} m = ${ft} ft`;
}
