function rankStudent() {
    const test = Number(document.getElementById("test").value);
    const mid = Number(document.getElementById("mid").value);
    const final = Number(document.getElementById("final").value);

    const result = document.getElementById("result");

    if (isNaN(test) || isNaN(mid) || isNaN(final)) {
        result.innerHTML = "nhập đầy đủ điểm hợp lệ";
        return;
    }

    const avg = (test + mid * 2 + final * 3) / 6;

    let rank = "";

    if (avg >= 8) {
        rank = "Giỏi";
    }
    else if (avg >= 6.5) {
        rank = "Khá";
    }
    else if (avg >= 5) {
        rank = "Trung bình";
    }
    else {
        rank = "Yếu";
    }

    result.innerHTML = "Điểm TB: " + avg.toFixed(2) + " - Xếp loại: " + rank;
}
