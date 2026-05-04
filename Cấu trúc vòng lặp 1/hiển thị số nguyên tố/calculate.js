function laSoNguyenTo(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function hienThi() {
    // nhập số lượng từ người dùng
    let numbers = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị:"));

    if (isNaN(numbers) || numbers <= 0) {
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }

    let count = 0;
    let N = 2;
    let result = "";

    while (count < numbers) {
        if (laSoNguyenTo(N)) {
            result += N + " ";
            count++;
        }
        N++;
    }

    document.getElementById("ketqua").innerText = result;
}