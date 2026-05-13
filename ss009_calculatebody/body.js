function tinhBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");

    if (weight === "" || height === "") {
        result.innerText = "Vui lòng nhập đầy đủ!";
        return;
    }

    let bmi = weight / (height * height);
    let message = "";

    if (bmi < 18.5) {
        message = "Gầy";
    } else if (bmi < 25) {
        message = "Bình thường";
    } else if (bmi < 30) {
        message = "Thừa cân";
    } else {
        message = "Béo phì";
    }

    result.innerText = `BMI = ${bmi.toFixed(2)} → ${message}`;
}
