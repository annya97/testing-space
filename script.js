const calculator_plus = document.querySelector('.calculator-plus');
const calculator_minus = document.querySelector('.calculator-minus');
const letter_capitalizer = document.querySelector('.letter-capitalizer');
const square = document.querySelector('.square');
const color_selector = document.querySelector('.color-selector');
const calculator_divide = document.querySelector('.calculator-divide');

calculator_plus.style.display = 'none';
calculator_minus.style.display = 'none';
letter_capitalizer.style.display = 'none';
square.style.display = 'none';
color_selector.style.display = 'none';
calculator_divide.style.display = 'none';

document.querySelector('.navigation .one').addEventListener('click', () => {
    calculator_plus.style.display = '';
    calculator_minus.style.display = 'none';
    letter_capitalizer.style.display = 'none';
    square.style.display = 'none';
    color_selector.style.display = 'none';
    calculator_divide.style.display = 'none';
});
document.querySelector('.navigation .two').addEventListener('click', () => {
    calculator_plus.style.display = 'none';
    calculator_minus.style.display = '';
    letter_capitalizer.style.display = 'none';
    square.style.display = 'none';
    color_selector.style.display = 'none';
    calculator_divide.style.display = 'none';
});
document.querySelector('.navigation .three').addEventListener('click', () => {
    calculator_plus.style.display = 'none';
    calculator_minus.style.display = 'none';
    letter_capitalizer.style.display = '';
    square.style.display = 'none';
    color_selector.style.display = 'none';
    calculator_divide.style.display = 'none';
});
document.querySelector('.navigation .four').addEventListener('click', () => {
    calculator_plus.style.display = 'none';
    calculator_minus.style.display = 'none';
    letter_capitalizer.style.display = 'none';
    square.style.display = '';
    color_selector.style.display = 'none';
    calculator_divide.style.display = 'none';
});
document.querySelector('.navigation .five').addEventListener('click', () => {
    calculator_plus.style.display = 'none';
    calculator_minus.style.display = 'none';
    letter_capitalizer.style.display = 'none';
    square.style.display = 'none';
    color_selector.style.display = '';
    calculator_divide.style.display = 'none';
});
document.querySelector('.navigation .six').addEventListener('click', () => {
    calculator_plus.style.display = 'none';
    calculator_minus.style.display = 'none';
    letter_capitalizer.style.display = 'none';
    square.style.display = 'none';
    color_selector.style.display = 'none';
    calculator_divide.style.display = '';
});

calculator_plus.querySelector('button[name="calculate"]').addEventListener('click', () => {
    const error = calculator_plus.querySelector('.error');

    error.textContent = '';

    const number_1 = Number(calculator_plus.querySelector('input[name="input_1"]').value);
    const number_2 = Number(calculator_plus.querySelector('input[name="input_2"]').value);

    let result = '';

    if (isNaN(number_1) || isNaN(number_2)) {
        error.textContent = 'Only numbers are allowed!';
    }
    else if (number_1 < 0 || number_2 < 0) {
        error.textContent = 'Negative numbers are not allowed!';
    }
    else if (number_1 > 9999 || number_2 > 9999) {
        error.textContent = 'One or both fields are out of range (0 - 9999). Please enter valid numbers!';
    }
    else {
        result = number_1 + number_2;
    }

    calculator_plus.querySelector('.result').textContent = result;
});

calculator_minus.querySelector('button[name="calculate"]').addEventListener('click', () => {
    const error = calculator_minus.querySelector('.error');

    error.textContent = '';

    const number_1 = Number(calculator_minus.querySelector('input[name="input_1"]').value);
    const number_2 = Number(calculator_minus.querySelector('input[name="input_2"]').value);

    let result = '';

    if (isNaN(number_1) || isNaN(number_2)) {
        error.textContent = 'Only numbers are allowed!';
    }
    else if (number_1 < 0 || number_2 < 0) {
        error.textContent = 'Negative numbers are not allowed!';
    }
    else {
        result = number_1 - number_2;
    }

    calculator_minus.querySelector('.result').textContent = result;
});

letter_capitalizer.querySelector('button[name="capitalize"]').addEventListener('click', () => {
    const value = letter_capitalizer.querySelector('input[name="input"]').value;

    let result = '-';

    if (isNaN(value)) {
        result = value.toUpperCase();
    }

    letter_capitalizer.querySelector('.result').textContent = result;
});

square.querySelector('button[name="square"]').addEventListener('click', () => {
    const value = square.querySelector('input[name="input"]').value;

    let result = '-';

    if (!isNaN(value)) {
        result = value ** 2;
    }

    square.querySelector('.result').textContent = result;
});

color_selector.querySelector('select[name="type"]').addEventListener('change', () => {
    const type = color_selector.querySelector('select[name="type"]').value;
    const color_1_el = color_selector.querySelector('input[name="color_1"]');
    const color_2_el = color_selector.querySelector('input[name="color_2"]');

    if (type === '1') {
        color_1_el.style.display = 'block';
        color_2_el.style.display = '';
    }
    else if (type === '2') {
        color_1_el.style.display = '';
        color_2_el.style.display = 'block';
    }
    else {
        color_1_el.style.display = '';
        color_2_el.style.display = '';
    }

    color_1_el.value = '';
    color_2_el.value = '#ffffff';
    color_selector.querySelector('.result').style.backgroundColor = '#ffffff';
});

color_selector.querySelector('button[name="color"]').addEventListener('click', () => {
    const type = color_selector.querySelector('select[name="type"]').value;
    const color_1_val = color_selector.querySelector('input[name="color_1"]').value;
    const color_2_val = color_selector.querySelector('input[name="color_2"]').value;

    let result = '#ffffff';

    isColorHex = value => {
        return /^#([0-9A-F]{6})$/i.test(value);
    };

    if (type === '1') {
        result = isColorHex(color_1_val) ? color_1_val : '#ffffff';
    }
    else if (type === '2') {
        result = isColorHex(color_2_val) ? color_2_val : '#ffffff';
    }

    color_selector.querySelector('.result').style.backgroundColor = result;
});

calculator_divide.querySelector('button[name="calculate"]').addEventListener('click', () => {
    const error = calculator_divide.querySelector('.error');

    error.textContent = '';

    const number_1 = Number(calculator_divide.querySelector('input[name="input_1"]').value);
    const number_2 = Number(calculator_divide.querySelector('input[name="input_2"]').value);

    let result = '';

    if (isNaN(number_1) || isNaN(number_2)) {
        error.textContent = 'Only numbers are allowed!';
    }
    else if (number_1 < 0 || number_2 < 0) {
        error.textContent = 'Negative numbers are not allowed!';
    }
    else if (number_1 > 99 || number_2 > 99) {
        error.textContent = 'One or both fields are out of range (0 - 99). Please enter valid numbers!';
    }
    else {
        result = number_1 / number_2;
    }

    calculator_divide.querySelector('.result').textContent = result;
});
