const run = () => {
    const input = document.getElementById("input");
    const result = document.getElementById("result");

    const s = input.value;
    let r = "";

    for (const c of s) {
        r += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    }

    result.innerText = r;
};
