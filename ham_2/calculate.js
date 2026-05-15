function swap(a, b) {
    const newA = b;
    const newB = a;

    return [newA, newB];
}

function showSwap() {
    const numA = Number(document.getElementById("numA").value);
    const numB = Number(document.getElementById("numB").value);
    const output = document.getElementById("output");

    const swapped = swap(numA, numB);

    output.innerText = `After swapping: ${swapped[0]} and ${swapped[1]}`;
}
