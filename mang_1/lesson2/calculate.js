function run() {

    const input = document.getElementById("input").value;

    let result = "";

    for (let i = 0; i < input.length; i++) {

        const current = input[i];

        const next = input[i + 1];

        result += current;

        if (!( current % 2)   && !(next % 2  )) {

            result += "-";

        }
    }

    document.getElementById("result").innerText = result;
}
