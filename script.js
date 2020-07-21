const calculatorScreen = document.querySelector('.calculator-screen')
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });

});
const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }

    calculationOperator = operator;
    currentNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});
const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});