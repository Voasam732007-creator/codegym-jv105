function run() {
    let input = document.getElementById("input").value;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        result += input[i];

        if (Number(input[i]) % 2 === 0 && Number(input[i + 1]) % 2 === 0 && input[i + 1] !== undefined) {
            result += "-";
        }
    }

    document.getElementById("result").innerText = result;
}
