
function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}

function operate(firstNumber, secondNumber, operator) {
    if (operator=='plus') {
        return add(firstNumber, secondNumber)
    } else if (operator=='subtract') {
        return subtract(firstNumber, secondNumber)
    } else if (operator=='multiply') {
        return multiply(firstNumber, secondNumber)
    } else if (operator=='divide') {
        return divide(firstNumber, secondNumber)
    }
}



let buttonSelectors = document.querySelector(".container")
let outputDisplay = document.querySelector("#display")

let number1 = null 
let number2 = null
let operator = null

let number1DecimalFlag = false;
let number2DecimalFlag = false;

const clearedDisplayValue = "0.0"


buttonSelectors.addEventListener('click', (event) => {
    let target = event.target;

    if (target.id == "clear") {
        updateDisplay(clearedDisplayValue);
        number1 = null;
        number2 = null;
        operator = null;
    }

    if (target.id == "equals") {
        if (number1!= null && operator!=null && number2==null) {
            number2 = number1;
            let resultValue = operate(Number(number1), Number(number2), operator);
            let resultDisplayValue = String(resultValue)
            updateDisplay(resultDisplayValue);
            number1 = resultValue;
            number2 = null;
            operator = null;

        } else if (number1!= null && operator!=null && number2!=null) {
            let resultValue = operate(Number(number1), Number(number2), operator);
            let resultDisplayValue = String(resultValue)
            updateDisplay(resultDisplayValue);
            number1 = resultValue;
            number2 = null;
            operator = null;
        }

    }


    switch(target.className) {
        case 'operator':
            if (number1 == null) {
                updateDisplay(clearedDisplayValue)
            } else {
                operator = target.id 
            }
            break;
        case 'digit':
            updateNumbers(target.id)
            break;
    }
});

function checkDecimal(numberInput, number) {
    if (number==null) {
        return numberInput
    }
    if (numberInput == ".") {
        if (number.includes(".")) {
            numberInput=""
        }
    }
    return numberInput

}

function updateNumbers(numberInput) {
    if (operator==null) {
        numberInput = checkDecimal(numberInput, number1);
        number1 = ((number1 == null) ? numberInput: number1+numberInput)
        updateDisplay(number1)
    } else {
        numberInput = checkDecimal(numberInput, number2);
        number2 = ((number2 == null) ? numberInput: number2+numberInput)    
        updateDisplay(number2)   
    }
}

function updateDisplay(text) {
    outputDisplay.textContent = "";
    outputDisplay.textContent = text;

}