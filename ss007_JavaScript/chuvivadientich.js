function tinh() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);

    if (length > 0 && width > 0) {
        let chuVi = (length + width) * 2;
        let dienTich = length * width;

        console.log("chu vii:", chuVi);
        console.log("diệntích:", dienTich);
    } else {
        console.log("Nhập số hợp lệ");
    }
}