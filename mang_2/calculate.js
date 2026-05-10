function replaceCharacters() {

    const text = document.getElementById("inputText").value;

    const arr = text.split("");

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "-") {

            arr[i] = "_";
        }
    }

    const result = arr.join("");

    document.getElementById("result").innerHTML =
        `Kết quả: ${result}`;
}
