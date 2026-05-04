function count() {
    let result = "";

    const MAX = 100;

    for (let i = 1; i <= MAX; i++) {
        result += i + " ";

        if (i === MAX) {
            alert("hoàn thành!");
        }
    }

    document.getElementById("result").innerText = result;
}
