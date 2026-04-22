function calcCommission() {
    const sales = Number(document.getElementById("sales").value);
    const result = document.getElementById("result");

    if (isNaN(sales) || sales < 0) {
        result.innerHTML = "Vui lòng nhập doanh số hợp lệ";
        return;
    }

    let commission = 0;

    if (sales >= 100000000) {
        commission = sales * 0.1;
    }
    else if (sales >= 50000000) {
        commission = sales * 0.07;
    }
    else if (sales >= 20000000) {
        commission = sales * 0.05;
    }
    else {
        commission = sales * 0.02;
    }

    result.innerHTML =
        "Hoa hồng nhận được: " + commission.toLocaleString() + " VNĐ";
}