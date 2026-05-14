function calculateCircleArea(radiusValue) {
    return Math.PI * radiusValue * radiusValue;
}

function calculateCirclePerimeter(radiusValue) {
    return 2 * Math.PI * radiusValue;
}

function showCircleResult() {

    const radiusInput =
        document.getElementById("radiusInput");

    const areaText =
        document.getElementById("areaText");

    const perimeterText =
        document.getElementById("perimeterText");

    const radiusValue =
        radiusInput.value;

    if (!radiusValue) {

        areaText.innerText =
            "Vui lòng nhập bán kính";

        perimeterText.innerText =
            "";

        return;
    }

    const circleArea =
        calculateCircleArea(Number(radiusValue));

    const circlePerimeter =
        calculateCirclePerimeter(Number(radiusValue));

    areaText.innerText =
        `Diện tích: ${circleArea.toFixed(2)}`;

    perimeterText.innerText =
        `Chu vi: ${circlePerimeter.toFixed(2)}`;
}
