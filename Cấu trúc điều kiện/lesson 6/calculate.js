function solve() {
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);

    const result = document.getElementById('result');

    if (isNaN(a) || isNaN(b)) {
        result.innerHTML = "nhập số hợp lệ !";
        return;
    }

    if (a === 0) {
        result.innerHTML = (b === 0)
            ? "phương trình vô số nghiệm"
            : "phương trình vô nghiệm";
    } else {
        let x = -b / a;
        result.innerHTML = `Nghiệm x = ${x}`;
    }
}
