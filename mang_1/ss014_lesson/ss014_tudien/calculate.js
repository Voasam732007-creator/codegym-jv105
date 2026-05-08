function translateWord() {
    const English = ["Hello", "bat", "dog", "football", "cat"];

    const Vietnamese = ["Xin chào", "con dơi", "con chó", "bóng đá", "con mèo"];

    const word = document.getElementById("word").value;

    let found = false;

    for (let i = 0; i < English.length; i++) {
        if (word == English[i]) {
            document.getElementById("result").innerText = Vietnamese[i];
            found = true;
        }
    }
    if (found == false) {
        document.getElementById("result").innerText = "Không tìm thấy từ phù hợp";
    }
}
