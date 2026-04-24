function calc() {
    const kwh = +document.getElementById("kwh").value;
    const r = document.getElementById("result");

    if (isNaN(kwh) || kwh < 0) {
        r.innerHTML = "Nhập hợp lệ!";
        return;
    }


    const RATE_1 = 1678;
    const RATE_2 = 1734;
    const RATE_3 = 2014;

    const LEVEL_1 = 50;
    const LEVEL_2 = 100;

    let money = 0;

    if (kwh <= LEVEL_1) {
        money = kwh * RATE_1;
    } else if (kwh <= LEVEL_2) {
        money = LEVEL_1 * RATE_1 + (kwh - LEVEL_1) * RATE_2;
    } else {
        money = LEVEL_1 * RATE_1
            + (LEVEL_2 - LEVEL_1) * RATE_2
            + (kwh - LEVEL_2) * RATE_3;
    }

    r.innerHTML = `Tiền điện = ${money} VND`;
}
