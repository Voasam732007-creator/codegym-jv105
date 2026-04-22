function calcPhoneFee() {
    const minutes = Number(document.getElementById("minutes").value);
    const result = document.getElementById("result");

    const RATE_1 = 500;
    const RATE_2 = 300;
    const RATE_3 = 200;

    const LEVEL_1 = 10;
    const LEVEL_2 = 60;

    const BLOCK_1 = 50;
    if (isNaN(minutes) || minutes < 0) {
        result.innerHTML = "Vui lòng nhập số phút hợp lệ";
        return;
    }

    let fee = 0;


    if (minutes <= LEVEL_1) {
        fee = minutes * RATE_1;
    }
    else if (minutes <= LEVEL_1) {
        fee = LEVEL_1 * RATE_1 + (minutes - LEVEL_1) * RATE_2;
    }
    else {
        fee = LEVEL_1 * RATE_1 + BLOCK_1 * RATE_2 + (minutes - LEVEL_2) * RATE_3;
    }

    result.innerHTML = "Cước điện thoại: " + fee.toLocaleString() + " VNĐ";
}