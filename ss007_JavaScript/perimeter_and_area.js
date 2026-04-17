function calculateRectangle() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);

    if (length > 0 && width > 0) {
        let perimeter = (length + width) * 2;
        let area = length * width;

        console.log(perimeter);
        console.log(area);
    } else {
        console.log("Invalid input");
    }
}