function checkDivisible() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let result = document.getElementById("result");

    if (b === 0) {
        result.innerHTML = "Không thể chia cho 0";
    } else if (a % b === 0) {
        result.innerHTML = a + " chia hết cho " + b;
    } else {
        result.innerHTML = a + " không chia hết cho " + b;
    }
}
