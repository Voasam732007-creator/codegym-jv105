function translateWord() {
    const English = ["Hello", "bat", "dog", "football", "cat"];

    const Vietnamese = ["Xin chào", "con dơi", "con chó", "bóng đá", "con mèo"];

    const word = document.getElementById("word").value;

    let found = false;

    for (let i = 0; i < English.length; i++) {
        if (!English[i].localeCompare(word)) {
            document.getElementById("result").innerText = Vietnamese[i];
            found = true;
        }
    }

    if (!found) {
        document.getElementById("result").innerText = "Không tìm thấy từ phù hợp";
    }
}
