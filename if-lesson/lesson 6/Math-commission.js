function calcCommission() {
    const sales = Number(document.getElementById("sales").value);
    const result = document.getElementById("result");

    const LEVEL_1 = 100000000;
    const LEVEL_2 = 50000000;
    const LEVEL_3 = 20000000;

    if (isNaN(sales) || sales < 0) {
        result.innerHTML = "Vui lòng nhập doanh số hợp lệ";
        return;
    }

    let commission = 0;

    if (sales >= LEVEL_1) {
        commission = sales * 0.1;
    }
    else if (sales >= LEVEL_2) {
        commission = sales * 0.07;
    }
    else if (sales >= LEVEL_3) {
        commission = sales * 0.05;
    }
    else {
        commission = sales * 0.02;
    }

    result.innerHTML =
        "Hoa hồng nhận được: " + commission.toLocaleString() + " VNĐ";
}