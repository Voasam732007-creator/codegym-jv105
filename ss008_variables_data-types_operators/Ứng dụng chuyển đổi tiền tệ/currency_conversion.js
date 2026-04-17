function convert() {
    let amount = Number(document.getElementById("amount").value);
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    let rate = 26000;
    let result;

    if (from === to) {
        result = amount;
    }
    else if (from === "USD" && to=== "VND") {
        result = amount * rate;
    }
    else if (from === "VND" && to=== "USD") {
        result = amount / rate;
    }

    console.log("Result:", result);
}