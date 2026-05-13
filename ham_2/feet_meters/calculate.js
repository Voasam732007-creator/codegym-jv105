function footToMeter(foot) {
    return 0.305 * foot;
}

function meterToFoot(meter) {
    return 3.279 * meter;
}

function convertFootToMeter() {
    const foot = document.getElementById("footInput").value;
    const result = footToMeter(foot);

    document.getElementById("meterResult").innerText =
        `${foot} feet = ${result.toFixed(3)} meters`;
}

function convertMeterToFoot() {
    const meter = document.getElementById("meterInput").value;
    const result = meterToFoot(meter);

    document.getElementById("footResult").innerText =
        `${meter} meters = ${result.toFixed(3)} feet`;
}
