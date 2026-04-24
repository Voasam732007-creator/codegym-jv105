function calculate() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    const result = document.getElementById("result");

    if(isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        result.innerHTML ="nhập lại";
            return;
    }
    let area = (a * b)/2;

    result.innerHTML = `diện tích tam giác = ${area}`;
}