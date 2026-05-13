const sortDescending = () => {

    const array = [3, 7, 12, 5, 9, 20, 15, 8, 1, 10];

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] < array[j]) {

                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;

            }
        }
    }

    const resultText = `Mảng giảm dần: ${array.join(", ")}`;

    result.innerText = resultText;
};
