function countWords() {

    const text = document.getElementById("inputText").value;

    const words = text.trim().split(" ");

    let count = 0;

    for (let i = 0; i < words.length; i++) {

        if (words[i] !== "") {

            count++;
        }
    }

    document.getElementById("result").innerHTML =
        `Chuỗi có ${count} từ`;
}
