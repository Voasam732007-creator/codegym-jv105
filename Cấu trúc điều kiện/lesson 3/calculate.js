function calculate() {
    const a = Number(document.getElementById("side").value);
    const result = document.getElementById("result");

    if (isNaN(a) || a <= 0) {
        result.innerHTML = "Vui lòng nhập cạnh hợp lệ!";
        return;
    }

    let area = a * a;

    result.innerHTML = `Diện tích hình vuông = ${area}`;
}