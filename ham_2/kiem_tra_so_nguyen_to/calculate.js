function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function generatePrimes() {
    const primes = [];

    for (let i = 2; i < 10000; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const count = document.getElementById("count");

btn.addEventListener("click", () => {
    result.innerHTML = "";

    const primes = generatePrimes();

    count.textContent = `Có ${primes.length} số nguyên tố dưới 10.000`;

    primes.forEach(num => {
        const span = document.createElement("span");
        span.classList.add("prime");
        span.textContent = num;
        result.appendChild(span);
    });
});
