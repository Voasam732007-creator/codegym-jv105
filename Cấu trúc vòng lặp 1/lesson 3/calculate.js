function showFibonacci() {
    const fib20 = 20;
    let result = "";

    let a = 0;
    let b = 1;

    for (let i = 0; i < fib20; i++) {
        result += a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerText = result;
}
