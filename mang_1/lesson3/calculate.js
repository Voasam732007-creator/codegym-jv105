const run = () => {
    const input = document.getElementById("input");
    const result = document.getElementById("result");

    const str = input.value;
    let r = "";

    for (const character of str) {
        r += character === character.toUpperCase()
            ? character.toLowerCase()
            : character.toUpperCase();
    }

    result.innerText = r;
};
