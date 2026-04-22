function checkNumber() {
    let num = Number(document.getElementById("num").value);
    let result = document.getElementById("result");

    if (isNaN(num)) {
        result.innerHTML = "Vui lòng nhập số hợp lệ";
    }
    else if (num > 0) {
        result.innerHTML = "Số lớn hơn 0";
    }
    else if (num < 0) {
        result.innerHTML = "Số nhỏ hơn 0";
    }
    else {
        result.innerHTML = "Số bằng 0";
    }
}
