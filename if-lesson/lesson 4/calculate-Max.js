function findMax() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);

    let result = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = "nhập đầy đủ 3 số hợp lệ";
    }
    else {
        let max = a;

        if (b > max) {
            max = b;
        }

        if (c > max) {
            max = c;
        }

        result.innerHTML = "Số lớn nhất là: " + max;
    }
}
