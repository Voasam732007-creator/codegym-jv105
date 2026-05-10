function compareStrings() {

    const text1 = document.getElementById("text1").value;

    const text2 = document.getElementById("text2").value;

    if (text1 === text2) {

        document.getElementById("result").innerHTML =
            `Hai chuỗi giống nhau`;
    }
    else {

        document.getElementById("result").innerHTML =
            `Hai chuỗi không giống nhau`;
    }
}
