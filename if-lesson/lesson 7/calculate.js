function calcPhoneFee() {
    const minutes = Number(document.getElementById("minutes").value);
    const result = document.getElementById("result");

    if (isNaN(minutes) || minutes < 0) {
        result.innerHTML = "Vui lòng nhập số phút hợp lệ";
        return;
    }

    let fee = 0;


    if (minutes <= 10) {
        fee = minutes * 500;
    }
    else if (minutes <= 60) {
        fee = 10 * 500 + (minutes - 10) * 300;
    }
    else {
        fee = 10 * 500 + 50 * 300 + (minutes - 60) * 200;
    }

    result.innerHTML = "Cước điện thoại: " + fee.toLocaleString() + " VNĐ";
}