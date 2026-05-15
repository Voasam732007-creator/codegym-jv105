const products = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
    "Xiaomi Redmi Note 4",
    "Apple iPhone 6S",
    "Xiaomi Mi 5s Plus",
    "Apple iPhone 8 Plus",
    "Fujitsu F-04E",
    "Oppo A71"
];

let editIndex = -1;

function showProducts() {
    const productTable = document.getElementById("productTable");
    const totalProduct = document.getElementById("totalProduct");

    let html = "";

    for (let i = 0; i < products.length; i++) {
        html += `
            <tr>
                <td>${i + 1}</td>
                <td class="name" onclick="pickProduct(${i})">${products[i]}</td>
                <td><button class="small-btn" onclick="pickProduct(${i})">Edit</button></td>
                <td><button class="small-btn" onclick="removeProduct(${i})">Delete</button></td>
            </tr>
        `;
    }

    productTable.innerHTML = html;
    totalProduct.innerText = `${products.length} products`;
}

function saveProduct() {
    const productInput = document.getElementById("productInput");
    const name = productInput.value.trim();

    if (name === "") {
        alert("Please enter product name");
        return;
    }

    if (editIndex === -1) {
        products.push(name);
        alert("Product added");
    } else {
        products[editIndex] = name;
        editIndex = -1;
        alert("Product updated");
    }

    productInput.value = "";
    showProducts();
}

function pickProduct(index) {
    const productInput = document.getElementById("productInput");

    productInput.value = products[index];
    editIndex = index;
}

function removeProduct(index) {
    const isDelete = confirm(`Delete ${products[index]}?`);

    if (isDelete) {
        products.splice(index, 1);
        showProducts();
    }
}

showProducts();
