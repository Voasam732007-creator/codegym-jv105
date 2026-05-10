function countNumbers() {

    const arr = ['a', '5', 'c', '8', '1', 'b', '9'];

    const size = arr.length;

    let count = 0;

    for (let i = 0; i < size; i++) {

        if (arr[i] >= '0' && arr[i] <= '9') {

            count++;
        }
    }

    document.getElementById("result").innerHTML =
        `Có ${count} ký tự số trong mảng`;
}
