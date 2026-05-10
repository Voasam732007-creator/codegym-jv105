function showArray() {

    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];

    let text = "";

    for (let i = 0; i < a.length; i++) {

        text += "row " + i + "<br>";

        for (let j = 0; j < a[i].length; j++) {

            text += a[i][j] + "<br>";
        }
    }

    document.getElementById("result").innerHTML = text;
}
