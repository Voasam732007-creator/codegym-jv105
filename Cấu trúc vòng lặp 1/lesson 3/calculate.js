function showFibonacci() {
    let result = "";

    let a = 0;
    let b = 1;

    for (let i = 0; i < 20; i++) {
        result += a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerText = result;
}