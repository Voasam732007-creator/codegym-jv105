const runFibo = () => {
    const n = +document.getElementById("number").value;

    let a = 0;
    let b = 1;
    let result = "";

    for (let i = 0; i < n; i++) {
        result += a + " ";

        const next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerText = result;
};
