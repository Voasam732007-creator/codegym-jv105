function run() {
    let input = document.getElementById("input").value;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        const currentNumber = Number(input[i]);
        const nextValue = input[i + 1];
        const nextNumber = Number(nextValue);

        const isCurrentEven = !(currentNumber % 2);
        const isNextEven = !(nextNumber % 2);

        result += input[i];

        if (nextValue !== undefined && isCurrentEven && isNextEven) {
            result += "-";
        }
    }

    document.getElementById("result").innerText = result;
}
