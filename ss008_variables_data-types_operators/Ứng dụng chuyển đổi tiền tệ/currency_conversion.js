    function convert() {
        let amount = Number(document.getElementById("amount").value);
        let from = document.getElementById("fromCurrency").value;
        let to = document.getElementById("toCurrency").value;

        let rate = 26000;
        let result;

        if (from === to) {
            result = amount;
        }
        else if (from === "USD") {
            result = amount * rate;
        }
        else {
            result = amount / rate;
        }

        document.getElementById("result").innerText = result;
    }
