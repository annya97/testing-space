const calculator_plus = document.querySelector('.calculator-plus');
const calculator_minus = document.querySelector('.calculator-minus');
const letter_capitalizer = document.querySelector('.letter-capitalizer');

calculator_plus.style.display = 'none';
calculator_minus.style.display = 'none';
letter_capitalizer.style.display = 'none';

document.querySelector('.navigation .one').addEventListener('click', () => {
    calculator_plus.style.display = '';
    calculator_minus.style.display = 'none';
    letter_capitalizer.style.display = 'none';
});
document.querySelector('.navigation .two').addEventListener('click', () => {
    calculator_plus.style.display = 'none';
    calculator_minus.style.display = '';
    letter_capitalizer.style.display = 'none';
});
document.querySelector('.navigation .three').addEventListener('click', () => {
    calculator_plus.style.display = 'none';
    calculator_minus.style.display = 'none';
    letter_capitalizer.style.display = '';
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
