const playGame = () => {

    const min = Number(prompt("Nhập số nhỏ nhất:"));
    const max = Number(prompt("Nhập số lớn nhất:"));

    const secret = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("SECRET =", secret);

    let attempts = 3;

    while (attempts > 0) {

        const guess = Number(prompt(`Đoán số (${min}-${max}) - còn ${attempts} lượt`));

        if (guess === secret) {
            alert("Đúng rồi!");
            return;
        }

        if (guess < secret) {
            alert("SỐ BẠN ĐOÁN LỚN HƠN");
        }
        else {
            alert("SỐ BẠN ĐOÁN NHỎ HƠN ");
        }

        attempts--;
    }

    alert(`Game over! Số đúng là: ${secret}`);
};