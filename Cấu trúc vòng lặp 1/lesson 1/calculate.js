let container = document.getElementById("bang");

for (let i = 2; i <= 9; i++) {
    let table = "<table>";

    for (let j = 1; j <= 9; j++) {
        table += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`;
    }

    table += "</table>";
    container.innerHTML += table;
}