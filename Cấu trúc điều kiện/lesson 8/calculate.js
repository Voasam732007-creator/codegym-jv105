function checkAge() {
    const age = +document.getElementById("age").value;
    const result = document.getElementById("result");

    if (!Number.isInteger(age) || age <= 0 || age >= 120) {
        result.innerHTML = "Không phải tuổi hợp lệ";
    } else {
        result.innerHTML = "Tuổi hợp lệ";
    }
}
