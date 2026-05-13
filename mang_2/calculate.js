function addNumbers() {

    const firstNum = 4;

    const secondNum = 8;

    result = firstNum + secondNum;

    return result;
}

let result = 0;

function showResult() {

    alert(`Giá trị result trước khi gọi hàm: ${result}`);

    result = addNumbers();

    alert(`Giá trị result sau khi gọi hàm: ${result}`);

}
