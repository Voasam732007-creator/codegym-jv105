const stars = [
    "Polaris",
    "Aldebaran",
    "Deneb",
    "Vega",
    "Altair",
    "Dubhe",
    "Regulus"
];

const constellations = [
    "Ursa Minor",
    "Taurus",
    "Cygnus",
    "Lyra",
    "Aquila",
    "Ursa Major",
    "Leo"
];

function searchConstellation(starName) {

    for (let i = 0; i < stars.length; i++) {

        if (starName === stars[i]) {
            return constellations[i];
        }

    }

    return null;
}

function findConstellation() {

    const starName = prompt("Nhập tên ngôi sao:");

    const result = searchConstellation(starName);

    if (result !== null) {

        document.getElementById("result").innerText =
            `Chòm sao tương ứng là: ${result}`;

    } else {

        document.getElementById("result").innerText =
            "Không tìm thấy ngôi sao";

    }

}
