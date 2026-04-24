function checkTriangle() {
    const a = +document.getElementById("a").value;
    const b = +document.getElementById("b").value;
    const c = +document.getElementById("c").value;
    const r = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        r.innerHTML = "Nhập số hợp lệ!";
        return;
    }

    if (a > 0 && b > 0 && c > 0 &&
        a + b > c &&
        b + c > a &&
        a + c > b) {
        r.innerHTML = "Là tam giác";
    } else {
        r.innerHTML = "Không phải tam giác";
    }
}