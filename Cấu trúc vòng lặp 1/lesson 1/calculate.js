function count() {
    let result = "";

    for (let i = 1; i <= 100; i++) {
        result += i + " ";

        if (i === 99) {
            alert("hoàn thành!");
        }
    }

    document.getElementById("result").innerText = result;
}
