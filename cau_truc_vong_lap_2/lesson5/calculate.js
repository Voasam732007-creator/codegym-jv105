const calculateInterest = () => {
    const principal = +document.getElementById("principal").value;
    const rate = +document.getElementById("rate").value / 100;
    const months = +document.getElementById("months").value;

    const finalAmount = principal * Math.pow(1 + rate, months);
    const interest = finalAmount - principal;

    document.getElementById("result").innerText =
        `Tổng tiền: ${finalAmount.toFixed(2)} | Lãi: ${interest.toFixed(2)}`;
};
