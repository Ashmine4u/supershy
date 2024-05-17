const screen = document.querySelector('.screen');
let total = 0;
let result = '0';
let operator;
let option = '';

function click(value) {
    if (isNaN(value) && value !== '.') {
        symbol(value);
    } else {
        number(value);
    }
    screen.innerText = result;
}

function symbol(value) {
    switch (value) {
        case 'C':
            result = '0';
            total = 0;
            option = '';
            operator = false;
            break;
        case '+/-':
            if (!result.includes('-')) {
                result = '-' + result;
            } else {
                result = result.replace('-', '');
            }
            break;
        case '%':
            result = (parseFloat(result) / 100).toString();
            break;
        case '=':
            result = 'Imissyou';
            total = '0';
            operator = true;
            break;
        case '.':
            if (!result.includes(value)) {
                result += value;
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            math(option);
            option = value === '×' ? '*' : value === '÷' ? '/' : value;
            break;
    }
}

function math(value) {
    if (total !== '0' && !operator) {
        result = eval(total + value + result).toString();
    }
    total = result;
    operator = true;
}

function number(value) {
    if (result === '0') {
        result = value;
    } else {
        if (operator) {
            result = '';
            operator = false;
        }
        result += value;
    }
}

function init() {
    document.querySelector('.buttons').addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            click(e.target.innerText);
        }
    });
}

init();
