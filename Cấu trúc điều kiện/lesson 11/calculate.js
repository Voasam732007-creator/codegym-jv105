function calcTax() {
    const income = +document.getElementById("income").value;
    const r = document.getElementById("result");

    if (isNaN(income) || income < 0) {
        r.innerHTML = "Vui lòng nhập hợp lệ!";
        return;
    }
    // mốc thu nhập
    const LEVEL_1 = 5000000;
    const LEVEL_2 = 10000000;

    // thuế suất
    const RATE_1 = 0.05;
    const RATE_2 = 0.1;
    const RATE_3 = 0.15;

    let tax = 0;

    if (income <= LEVEL_1) {
        tax = income * RATE_1;
    } else if (income <= LEVEL_2) {
        tax = LEVEL_1 * RATE_1
            + (income - LEVEL_1) * RATE_2;
    } else {
        tax = LEVEL_1 * RATE_1
            + (LEVEL_2 - LEVEL_1) * RATE_2
            + (income - LEVEL_2) * RATE_3;
    }

    r.innerHTML = `Thuế phải nộp = ${tax} VND`;
}
