document.getElementById("calculateDays").onclick = function () {
    let month = Number(document.getElementById("month").value);

    const month31 = [1,3,5,7,8,10,12];
    const month30 = [4,6,9,11];

    let result;

    switch (true) {
        case month31.includes(month):
            result = "31 ngày";
            break;

        case month30.includes(month):
            result = "30 ngày";
            break;

        case month === 2:
            result = "28 hoặc 29 ngày";
            break;

        default:
            result = "Không ok";
    }

    document.getElementById("result").innerHTML = result;
};