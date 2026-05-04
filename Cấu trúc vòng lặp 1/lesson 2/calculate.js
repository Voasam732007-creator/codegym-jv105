let temp = parseFloat(prompt("Enter current temperature:"));
const Max_temperature = 100;
const Min_temperature = 20;
if (temp > Max_temperature) {
    alert("Giảm nhiệt độ!");
} else if (temp < Min_temperature) {
    alert("Tăng nhiệt độ!");
} else {
    alert("Nhiệt độ bình thường");
}
