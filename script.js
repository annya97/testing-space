const contents = document.querySelector('.contents');

const elements = {
    input_1: contents.querySelector('input[name="input_1"]'),
    input_2: contents.querySelector('input[name="input_2"]'),
    calculate: contents.querySelector('button[name="calculate"]'),
    result: contents.querySelector('.result'),
    error: contents.querySelector('.error')
};

elements.calculate.addEventListener('click', e => {
    elements.error.textContent = '';

    const number_1 = Number(elements.input_1.value);
    const number_2 = Number(elements.input_2.value);

    let result = '';

    if (isNaN(number_1) || isNaN(number_2)) {
        elements.error.textContent = 'Only numbers are allowed!';
    }
    else if (number_1 < 0 || number_2 < 0) {
        elements.error.textContent = 'Negative numbers are not allowed!';
    }
    else if (number_1 > 9999 || number_2 > 9999) {
        elements.error.textContent = 'One or both fields are out of range (0 - 9999). Please enter valid numbers!';
    }
    else {
        result = number_1 + number_2;
    }

    elements.result.textContent = result;
});
