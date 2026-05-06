const drawTriangles = () => {
    const n = +document.getElementById("number").value;

    let topLeft = "";
    let bottomLeft = "";
    let topRight = "";
    let bottomRight = "";

    for (let i = 1; i <= n; i++) {
        topLeft += "*".repeat(i) + "\n";
    }

    for (let i = n; i >= 1; i--) {
        bottomLeft += "*".repeat(i) + "\n";
    }

    for (let i = 1; i <= n; i++) {
        topRight += " ".repeat(n - i) + "*".repeat(i) + "\n";
    }

    for (let i = n; i >= 1; i--) {
        bottomRight += " ".repeat(n - i) + "*".repeat(i) + "\n";
    }

    document.getElementById("topLeft").innerText = topLeft;
    document.getElementById("bottomLeft").innerText = bottomLeft;
    document.getElementById("topRight").innerText = topRight;
    document.getElementById("bottomRight").innerText = bottomRight;
};
