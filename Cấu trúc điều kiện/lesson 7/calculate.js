function solve() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const result = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = "Vui lòng nhập số hợp lệ!";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            result.innerHTML = c === 0
                ? "Vô số nghiệm"
                : "Vô nghiệm";
        } else {
            let x = -c / b;
            result.innerHTML = `Nghiệm x = ${x}`;
        }
        return;
    }

    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        result.innerHTML = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        result.innerHTML = `Nghiệm kép x = ${x}`;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result.innerHTML = `x1 = ${x1}, x2 = ${x2}`;
    }
}
