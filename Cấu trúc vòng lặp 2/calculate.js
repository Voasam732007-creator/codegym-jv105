const runFibo = () => {
    const n = Number(document.getElementById("number").value);

    let a = 0, b = 1, result = "";

    for (let i = 0; i < n; i++) {
        result += a + " ";
        const next = a + b;
        a = b;
        b = next;
    }

    const output = document.getElementById("result");

    if (output) {
        output.innerText = result;
    } else {
        console.error("Không tìm thấy element #result");
    }
};
