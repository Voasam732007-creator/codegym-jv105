const drawRectangle = () => {
    const width = +document.getElementById("width").value;
    const height = +document.getElementById("height").value;

    let result = "";

    for (let i = 1; i <= height; i++) {
        if (i === 1 || i === height) {
            // dòng trên cùng & dưới cùng
            result += "* ".repeat(width) + "\n";
        } else {
            // dòng giữa
            result += "* " + "  ".repeat(width - 2) + "*\n";
        }
    }

    document.getElementById("result").innerText = result;
};
