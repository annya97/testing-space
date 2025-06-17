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

    const number_1 = parseFloat(elements.input_1.value);
    const number_2 = parseFloat(elements.input_2.value);

    let result = '';

    if (number_1 < 0 || number_2 < 0) {
        elements.error.textContent = 'Negative numbers are not allowed!';
    }
    else {
        result = number_1 + number_2;
    }

    elements.result.textContent = result;
});
