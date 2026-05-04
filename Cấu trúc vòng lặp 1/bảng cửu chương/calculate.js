let container = document.getElementById("bang");

for (let i = 2; i <= 9; i++) {
    let table = document.createElement("table");

    for (let j = 1; j <= 9; j++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        td.textContent = `${i} x ${j} = ${i * j}`;

        tr.appendChild(td);
        table.appendChild(tr);
    }

    container.appendChild(table);
}
