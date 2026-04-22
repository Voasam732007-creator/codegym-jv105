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
    const GIOI = 8;
    const KHA = 6.5;
    const TRUNGBINH = 5;

    let rank = "";

    if (avg >= GIOI) {
        rank = "Giỏi";
    }
    else if (avg >= KHA) {
        rank = "Khá";
    }
    else if (avg >= TRUNGBINH) {
        rank = "Trung bình";
    }
    else {
        rank = "Yếu";
    }

    result.innerHTML = "Điểm TB: " + avg.toFixed(2) + " - Xếp loại: " + rank;
}
