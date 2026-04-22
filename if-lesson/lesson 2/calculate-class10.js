function checkAge() {
    let age = Number(document.getElementById("age").value);
    let result = document.getElementById("result");

    if (age >= 15) {
        result.innerHTML = "Đủ điều kiện vào lớp 10";
    }else if (age >0) {
        result.innerHTML = "không đủ điều kiện vào 10"
    } else {
        result.innerHTML = "vui lòng nhập số tuổi cho hợp!"
    }
}
