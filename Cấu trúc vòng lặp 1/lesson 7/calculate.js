const runFizzBuzz = () => {
    const limit = Number(prompt("Enter limit number:"));

    if (isNaN(limit) || limit <= 0) {
        alert("Please enter a valid number!");
        return;
    }

    let result = "";

    for (let i = 1; i <= limit; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz ";
        } else if (i % 3 === 0) {
            result += "Fizz ";
        } else if (i % 5 === 0) {
            result += "Buzz ";
        } else {
            result += `${i} `;
        }
    }

    document.getElementById("result").innerText = result;
};
