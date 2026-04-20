document.getElementById("calculateDays").onclick = function () {
    let month = Number(document.getElementById("month").value);
    let result;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = "31 ngày";
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            result = "30 ngày";
            break;

        case 2:
            result = "28 hoặc 29 ngày";
            break;

        default:
            result = "Không hợp lệ";
    }

    document.getElementById("result").innerHTML = result;
};